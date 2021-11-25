import { Router } from 'oak/router.ts';
import HelloController from '@/ui/hello/controller.ts';
import MixedTwitterGithubController from '@/ui/mixed.twitter.github/controller.ts';

const router = new Router();

// hello controller
router.get('/hello', HelloController.index);
// mixed.twitter.github controller
router.get('/mixed.twitter.github', MixedTwitterGithubController.index);

export default router;
