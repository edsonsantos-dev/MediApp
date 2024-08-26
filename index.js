import express from "express";
import router from "./routes/router.js";
import pkg from "body-parser";
import db from "./database/database.js";


const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(3001, function () {
    console.log("Listening to port 3001");
});

app.use("/", router);