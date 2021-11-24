import { Application } from 'oak/mod.ts';
import helloRouter from '/ui/controllers/hello.ts';

const app = new Application();

// hello
app.use(helloRouter.routes());
app.use(helloRouter.allowedMethods());

// error handling https://github.com/oakserver/oak/issues/42#issuecomment-598192832

await app.listen({ port: 8000 });
