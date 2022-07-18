import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();

import router from "./routers/index.js";
import { errorHandlerMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})