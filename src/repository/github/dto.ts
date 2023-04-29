import { GithubId } from '@/domain/github.id.ts';

export type GithubRepositoryUserDto = {
  profile: GithubRepositoryProfileDto;
  repositries: GithubRepositoryRepositoryDto[];
};

export type GithubRepositoryProfileDto = {
  id: GithubId;
  name: string;
};

export type GithubRepositoryRepositoryDto = {
  url: string;
  star: number;
};
