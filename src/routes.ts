import { Router } from 'oak/router.ts';
import HelloController from '@/src/ui/hello/controller.ts';

const router = new Router();
// hello controller
router.get('/hello', HelloController.index);

export default router;
