import Express from "express";
import { postValidator } from "../tools/validator";

const route = Express.Router();
route.post("/new", async (req, res) => {
  if (postValidator(req.body)) {
    res.send(req.body);
  } else {
    res.sendStatus(400);
  }
});

export { route };
