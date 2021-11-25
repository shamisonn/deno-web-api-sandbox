import { TwitterRepository } from '@/repository/twitter/repository.ts';
import { TwitterId } from '@/domain/twitter.id.ts';
import { TwitterRepositoryUserDto } from '@/repository/twitter/dto.ts';

export class TwitterRepositoryImpl implements TwitterRepository {
  getUserInfoById(id: TwitterId): Promise<TwitterRepositoryUserDto> {
    if (id.isSame(new TwitterId('shamisonn'))) {
      return new Promise((_res, _rej) => {
        return {
          id: id,
          name: 'shamisonn',
          iconUrl: 'https://twitter.jp/shamisonn.png',
        };
      });
    }

    return new Promise((_res, _rej) => {
      return {
        id: id,
        name: 'shohei',
        iconUrl: 'https://twitter.jp/shohei.png',
      };
    });
  }
}
