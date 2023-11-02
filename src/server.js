//import
require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewsEngine");
const webRoutes = require("./routes/web");
const apiRouter = require("./routes/api");

//get the client
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config
configViewEngine(app);

// test connection

app.use("/", webRoutes);
app.use("/api", apiRouter);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
