import express from "express";
import * as contactController from "./../controllers/contact-controller.js";

const router = express.Router();

router
  .route("/contacts")
  .post(contactController.post)
  .get(contactController.index);

router
  .route("/contacts/:id")
  .get(contactController.get)
  .put(contactController.update)
  .delete(contactController.remove);

export default router;
