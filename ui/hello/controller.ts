import { Context } from 'oak/context.ts';
import { Router } from 'oak/router.ts';
import { HelloPresenter } from '/ui/hello/presenter.ts';

export class HelloController {
  constructor(readonly presenter: HelloPresenter) {
  }
  index(ctx: Context) {
    return ctx.response.body = this.presenter.index();
  }
}

const router = new Router();
const controller = new HelloController(new HelloPresenter());
router.get('/hello', controller.index);

export default router;
