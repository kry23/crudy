import express from "express";
import { amazingRouter } from "./routes/people";
import { Something } from "./models/Something";
import mongoose, { mongo } from "mongoose";

const url = "mongodb://localhost/crudy";

const app = express();
app.use(express.json());
app.use("/people", amazingRouter);

const superArray: Something[] = [];

mongoose.connect(url, { useNewUrlParser: true });
const conn = mongoose.connection;

conn.on("open", () => {
  console.log("database connected");
});

app.listen(5000, () => {
  console.log("listening on 5000");
});
