import { GithubId } from '@/domain/github.id.ts';
import { TwitterId } from '@/domain/twitter.id.ts';
import { UserId } from '@/domain/user.id.ts';
import {
  UserIdMappingRepository,
} from '@/repository/user.id.mapping/repository.ts';
import {
  MappingUserIdToGithubIdRepositoryDto,
  MappingUserIdToTwitterIdRepositoryDto,
} from '@/repository/user.id.mapping/dto.ts';

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

export class UserIdMappingRepositoryImpl implements UserIdMappingRepository {
  async getTwitterId(
    id: UserId,
  ): Promise<MappingUserIdToTwitterIdRepositoryDto> {
    await sleep(1000);

    return {
      userId: id,
      twitterId: new TwitterId('shamisonn'),
    };
  }
  async getGithubId(id: UserId): Promise<MappingUserIdToGithubIdRepositoryDto> {
    await sleep(1000);

    return {
      userId: id,
      githubId: new GithubId('shamisonn'),
    };
  }
}
