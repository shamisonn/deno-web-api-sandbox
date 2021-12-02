import { UserId } from '@/domain/user.id.ts';

export interface InputDto {
  userId: UserId;
}

export interface OutputDto {
  twitterName: string;
  githubRepositories: string[];
}

export interface TwitterNameAndGihubRepositoriesUseCase {
  get(
    params: InputDto,
  ): Promise<OutputDto>;
}
