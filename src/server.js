import express from "express";

import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
// import connection from "./config/connectDB";
require("dotenv").config(); // viết như vậy thì mới khai báo được bên trong thằng env

import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8080;
// config view engine
configViewEngine(app);
// test connectiondb
// connection();
// config body parrser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT back end is running " + PORT);
});
