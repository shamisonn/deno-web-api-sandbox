import { GithubId } from '@/domain/github.id.ts';

export interface GithubRepositoryUserDto {
  profile: GithubRepositoryProfileDto;
  repositries: GithubRepositoryRepositoryDto[];
}

export interface GithubRepositoryProfileDto {
  id: GithubId;
  name: string;
}

export interface GithubRepositoryRepositoryDto {
  url: string;
  star: number;
}
