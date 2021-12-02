import { Router } from 'oak/router.ts';
import HelloController from '@/ui/hello/controller.ts';
import { controller as TwitterNameAndGihubRepositoriesController } from '@/ui/twitter.name.and.github.repositories/controller.ts';

const router = new Router();

// hello controller
router.get('/hello', HelloController.index);
// mixed.twitter.github controller
router.get(
  '/twitter.name.and.github.repositories',
  async (ctx) => {
    await TwitterNameAndGihubRepositoriesController.index(ctx);
  },
);

export default router;
