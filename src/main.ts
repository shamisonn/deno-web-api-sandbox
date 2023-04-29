import router from '@/routes.ts';
import { Application } from 'oak/application.ts';

const app = new Application();

// hello
app.use(router.routes());
app.use(router.allowedMethods());

// error handling https://github.com/oakserver/oak/issues/42#issuecomment-598192832
const PORT = 8080;
console.log(`running at localhost:${PORT}`);
await app.listen({ port: PORT });
