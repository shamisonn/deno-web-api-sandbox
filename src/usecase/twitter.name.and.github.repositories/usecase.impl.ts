import { TwitterRepository } from '@/repository/twitter/repository.ts';
import { GithubRepository } from '@/repository/github/repository.ts';
import { UserIdMappingRepository } from '@/repository/user.id.mapping/repository.ts';
import {
  InputDto,
  OutputDto,
  TwitterNameAndGihubRepositoriesUseCase,
} from '@/usecase/twitter.name.and.github.repositories/usecase.ts';
import { UserId } from '@/domain/user.id.ts';

export class TwitterNameAndGihubRepositoriesUseCaseImpl
  implements TwitterNameAndGihubRepositoriesUseCase {
  constructor(
    private readonly twitter: TwitterRepository,
    private readonly github: GithubRepository,
    private readonly mapping: UserIdMappingRepository,
  ) {}

  async get(params: InputDto): Promise<OutputDto> {
    const [twitterRepositoryDto, githubRepositoryDto] = await Promise.all([
      this.getTwitterRepositoryDto(params.userId),
      this.getGithubRepositoryDto(params.userId),
    ]);

    return {
      twitterName: twitterRepositoryDto.name,
      githubRepositories: githubRepositoryDto.repositries.map((d) => d.url),
    };
  }

  private async getTwitterRepositoryDto(userId: UserId) {
    const dto = await this.mapping.getTwitterId(userId);
    return this.twitter.getUserInfoById(dto.twitterId);
  }

  private async getGithubRepositoryDto(userId: UserId) {
    const dto = await this.mapping.getGithubId(userId);
    return this.github.getUserInfoById(dto.githubId);
  }
}
