import { GithubId } from '@/domain/github.id.ts';
import { TwitterId } from '@/domain/twitter.id.ts';

interface MappingTwitterGithubRepositoryDto<T, F> {
  id: T;
  ids: F[];
}

export type MappingByTwitterIdRepositoryDto = MappingTwitterGithubRepositoryDto<
  TwitterId,
  GithubId
>;
export type MappingByGithubIdRepositoryDto = MappingTwitterGithubRepositoryDto<
  GithubId,
  TwitterId
>;
