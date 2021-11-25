import { TwitterId } from '@/domain/twitter.id.ts';
import { GithubId } from '@/domain/github.id.ts';
import {
  MappingByGithubIdRepositoryDto,
  MappingByTwitterIdRepositoryDto,
} from '@/repository/mapping.twitter.github/dto.ts';

export interface MappingTwitterGithubRepository {
  getGithubIdsByTwitterId(
    id: TwitterId,
  ): Promise<MappingByTwitterIdRepositoryDto>;

  getTwitterIdsByGithubId(
    id: GithubId,
  ): Promise<MappingByGithubIdRepositoryDto>;
}
