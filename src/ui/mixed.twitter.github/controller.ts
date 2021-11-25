import { Context } from 'oak/context.ts';
import { MixedTwitterGithubPresenter } from '@/ui/mixed.twitter.github/presenter.ts';

class MixedTwitterGithubController {
  private static readonly presenter = new MixedTwitterGithubPresenter();

  index(ctx: Context) {
    console.log('Call: MixedTwitterGithubController;');
    return ctx.response.body = MixedTwitterGithubController.presenter.index();
  }
}
const controller = new MixedTwitterGithubController();

export default controller;
