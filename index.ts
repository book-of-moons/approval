import Express from "express";
import bodyParser from "body-parser";
import { route } from "./src/router/post";

let app = Express();
app.use(bodyParser.json());
app.use("/post", route);
app.listen(3000);
