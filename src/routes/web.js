import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();
/**
 *
 * @param {*} app : express  app
 */
const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWord);
  router.get("/user", homeController.handleUserPage);
  router.post("/users/create-user", homeController.handleCreateNewUser);
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.get("/update-user/:id", homeController.getUpdateUser);
  router.post("/user/update-user", homeController.handleUpdateUser);
  return app.use("/", router);
};
export default initWebRoutes;
