import { UserId } from '@/domain/user.id.ts';
import { UserGithubInfo } from '@/domain/user.github.info.ts';
import { UserTwitterInfo } from '@/domain/user.twitter.info.ts';

export class User {
  constructor(
    readonly id: UserId,
    readonly name: string,
    readonly githubInfo?: UserGithubInfo,
    readonly twitterInfo?: UserTwitterInfo,
  ) {}
}
