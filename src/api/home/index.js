import { Router } from "express";
import { apiVersionMiddleware, middleware } from "./middleWare";
import routesVersioning from "express-routes-versioning";
import * as controller from "./controller";
import validation from "./validation";
import { celebrate } from "celebrate";

const router = new Router();
const versionApi = routesVersioning();
router.post(
  "/",
  middleware.checkAuth,
  versionApi({
    "1.0.0": celebrate({
      body: validation.validName_v1,
    }),
    "2.0.0": celebrate({
      body: validation.validName_v2,
    }),
  }),
  versionApi({
    "1.0.0": controller.addData_v1,
    "2.0.0": controller.addData_v2,
  })
);

export default router;
