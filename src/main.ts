import { Application } from 'oak/application.ts';
import router from '@/routes.ts';

const app = new Application();

// hello
app.use(router.routes());
app.use(router.allowedMethods());

// error handling https://github.com/oakserver/oak/issues/42#issuecomment-598192832

await app.listen({ port: 8000 });
