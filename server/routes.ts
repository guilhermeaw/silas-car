import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

import {
  listCustomizations,
  insertCustomization,
  updateCustomization,
  deleteCustomization
} from "./controllers/customizations-controller.ts";

import { auth } from "./controllers/auth-controller.ts";
import { authorized } from "./middlewares/authorized.ts";

const router = new Router(); 

router
  .post("/session", auth)
  .get("/customizations", listCustomizations)
  .post("/customizations", authorized, insertCustomization)
  .put("/customizations/:id", authorized, updateCustomization)
  .delete("/customizations/:id", authorized, deleteCustomization);

export default router;
