import { GithubId } from '@/domain/github.id.ts';
import { TwitterId } from '@/domain/twitter.id.ts';
import { UserId } from '@/domain/user.id.ts';

export interface MappingUserIdToGithubIdRepositoryDto {
  userId: UserId;
  githubId: GithubId;
}
export interface MappingUserIdToTwitterIdRepositoryDto {
  userId: UserId;
  twitterId: TwitterId;
}
