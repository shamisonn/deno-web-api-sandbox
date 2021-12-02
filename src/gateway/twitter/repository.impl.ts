import { TwitterRepository } from '@/repository/twitter/repository.ts';
import { TwitterId } from '@/domain/twitter.id.ts';
import { TwitterRepositoryUserDto } from '@/repository/twitter/dto.ts';

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

export class TwitterRepositoryImpl implements TwitterRepository {
  async getUserInfoById(id: TwitterId): Promise<TwitterRepositoryUserDto> {
    await sleep(1000);

    if (id.isSame(new TwitterId('shamisonn'))) {
      return {
        id: id,
        name: 'しゃみそん',
        iconUrl: 'https://twitter.jp/shamisonn.png',
      };
    }

    return {
      id: id,
      name: 'shohei',
      iconUrl: 'https://twitter.jp/shohei.png',
    };
  }
}
