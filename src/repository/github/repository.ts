import { GithubRepositoryUserDto } from '@/repository/github/dto.ts';
import { GithubId } from '@/domain/github.id.ts';

export interface GithubRepository {
  getUserInfoById(id: GithubId): Promise<GithubRepositoryUserDto>;
}
