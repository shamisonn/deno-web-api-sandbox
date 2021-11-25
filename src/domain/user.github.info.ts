import { UserId } from '@/domain/user.id.ts';

export class UserGithubInfo {
  constructor(
    readonly userId: UserId,
    readonly sumStar: number,
    readonly repositoryUrls: string[],
  ) {}
}
