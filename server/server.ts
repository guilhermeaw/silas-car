import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import router from "./routes.ts";

const PORT = 4000;

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on PORT: ${PORT}`);
await app.listen({ port: PORT });