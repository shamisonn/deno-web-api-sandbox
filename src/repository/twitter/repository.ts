import { TwitterRepositoryUserDto } from '@/repository/twitter/dto.ts';
import { TwitterId } from '@/domain/twitter.id.ts';

export interface TwitterRepository {
  getUserInfoById(id: TwitterId): Promise<TwitterRepositoryUserDto>;
}
