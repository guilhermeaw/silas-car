import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

import {
  getCars,
  insertCar
} from "./controllers/cars-controller.ts";


const router = new Router(); 

router
  .get("/cars", getCars)
  .post("/cars", insertCar);

export default router;
