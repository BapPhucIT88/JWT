import express from "express";

import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config(); // viết như vậy thì mới khai báo được bên trong thằng env
const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
configViewEngine(app);
//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT back end is running " + PORT);
});
