import { MappingTwitterGithubRepository } from '@/repository/mapping.twitter.github/repository.ts';
import { GithubId } from '@/domain/github.id.ts';
import { TwitterId } from '@/domain/twitter.id.ts';
import {
  MappingByGithubIdRepositoryDto,
  MappingByTwitterIdRepositoryDto,
} from '@/repository/mapping.twitter.github/dto.ts';

export class MappingTwitterGithubRepositoryImpl
  implements MappingTwitterGithubRepository {
  getGithubIdsByTwitterId(
    id: TwitterId,
  ): Promise<MappingByTwitterIdRepositoryDto> {
    return new Promise((_res, _rej) => {
      return {
        id: id,
        ids: [
          new GithubId('shamisonn'),
          new GithubId('shohei'),
        ],
      };
    });
  }

  getTwitterIdsByGithubId(
    id: GithubId,
  ): Promise<MappingByGithubIdRepositoryDto> {
    return new Promise((_res, _rej) => {
      return {
        id: id,
        ids: [
          new TwitterId('shamisonn'),
          new TwitterId('shohei'),
        ],
      };
    });
  }
}
