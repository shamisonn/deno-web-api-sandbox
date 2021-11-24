import { Context } from 'oak/context.ts';
import { HelloPresenter } from '@/ui/hello/presenter.ts';

class HelloController {
  private static readonly presenter = new HelloPresenter();

  index(ctx: Context) {
    console.log('Call: HelloController;');
    return ctx.response.body = HelloController.presenter.index();
  }
}
const controller = new HelloController();

export default controller;
