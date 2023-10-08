//import
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const configViewEngine = require("./config/viewsEngine");
const webRoutes = require("./routes/web");

// config
configViewEngine(app);

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use("/v1", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
