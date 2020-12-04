import express from "express";
import { amazingRouter } from "./routes/router";

const app = express();
app.use(express.json());
app.use(amazingRouter);

app.listen(3002, () => {
  console.log("listening on 3002");
});