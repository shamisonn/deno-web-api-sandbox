import { GithubRepository } from '@/repository/github/repository.ts';
import { GithubId } from '@/domain/github.id.ts';
import { GithubRepositoryUserDto } from '@/repository/github/dto.ts';

const mock1: GithubRepositoryUserDto = {
  profile: {
    id: new GithubId('shamisonn'),
    name: 'shami',
  },
  repositries: [
    { url: 'https://shamisonn/hoge.git', star: 10 },
    { url: 'https://shamisonn/fuga.git', star: 20 },
  ],
};

const mock2: GithubRepositoryUserDto = {
  profile: {
    id: new GithubId('shohei'),
    name: 'shohei',
  },
  repositries: [
    { url: 'https://shohei/hoge.git', star: 11 },
    { url: 'https://shohei/fuga.git', star: 21 },
  ],
};

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

export class GithubRepositoryImpl implements GithubRepository {
  async getUserInfoById(id: GithubId): Promise<GithubRepositoryUserDto> {
    await sleep(1000);
    if (id.isSame(new GithubId('shamisonn'))) {
      return mock1;
    }

    return mock2;
  }
}
