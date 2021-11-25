import { UserId } from '@/domain/user.id.ts';

export class UserTwitterInfo {
  constructor(
    readonly userId: UserId,
    readonly name: string,
    readonly iconUrl: string,
  ) {}
}
