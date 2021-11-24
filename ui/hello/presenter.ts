import { Result } from '/ui/view.ts';
import { HelloValue } from '/ui/hello/view.ts';

export class HelloPresenter {
  index(): Result<HelloValue> {
    return {
      status: 200,
      value: {
        message: 'hello, world!',
      },
    };
  }
}
