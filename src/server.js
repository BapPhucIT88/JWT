import express from "express";

import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config(); // viết như vậy thì mới khai báo được bên trong thằng env

import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8080;
// config view engine
configViewEngine(app);
// config body parrser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT back end is running " + PORT);
});
