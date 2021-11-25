import { TwitterId } from '@/domain/twitter.id.ts';

export interface TwitterRepositoryUserDto {
  readonly id: TwitterId;
  readonly name: string;
  readonly iconUrl: string;
}
