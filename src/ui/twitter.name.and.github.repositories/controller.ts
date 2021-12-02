import { Context } from 'oak/context.ts';
import { TwitterNameAndGihubRepositoriesPresenter } from '@/ui/twitter.name.and.github.repositories/presenter.ts';
import { TwitterNameAndGihubRepositoriesUseCase } from '@/usecase/twitter.name.and.github.repositories/usecase.ts';
import { TwitterNameAndGihubRepositoriesUseCaseImpl } from '@/usecase/twitter.name.and.github.repositories/usecase.impl.ts';
import { TwitterRepositoryImpl } from '@/gateway/twitter/repository.impl.ts';
import { UserIdMappingRepositoryImpl } from '@/gateway/user.id.mapping/repository.impl.ts';
import { GithubRepositoryImpl } from '@/gateway/github/repository.impl.ts';
import { UserId } from '@/domain/user.id.ts';

class TwitterNameAndGihubRepositoriesController {
  constructor(
    private readonly presenter: TwitterNameAndGihubRepositoriesPresenter,
    private readonly usecase: TwitterNameAndGihubRepositoriesUseCase,
  ) {
    console.log('Create: TwitterNameAndGihubRepositoriesController');
  }

  async index(ctx: Context) {
    console.log('Call: TwitterNameAndGihubRepositoriesController;');
    const output = await this.usecase.get({
      userId: new UserId(10),
    });
    console.log('...: TwitterNameAndGihubRepositoriesController;');
    ctx.response.body = this.presenter.index(output);
    console.log('End: TwitterNameAndGihubRepositoriesController;');
  }
}
export const controller = new TwitterNameAndGihubRepositoriesController(
  new TwitterNameAndGihubRepositoriesPresenter(),
  new TwitterNameAndGihubRepositoriesUseCaseImpl(
    new TwitterRepositoryImpl(),
    new GithubRepositoryImpl(),
    new UserIdMappingRepositoryImpl(),
  ),
);
