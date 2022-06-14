import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

import {
  getCars,
  insertCar
} from "./controllers/cars-controller.ts";

import { auth } from "./controllers/auth-controller.ts";
import { authorized } from "./middlewares/authorized.ts";

const router = new Router(); 

router
  .post("/session", auth)
  .get("/cars", authorized, getCars)
  .post("/cars", authorized, insertCar);

export default router;
