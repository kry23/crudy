import express from "express";
import { Router, Request, Response, NextFunction } from "express";

import { SomePerson } from "../models/Something";

const amazingRouter = Router();

amazingRouter.get("/", async (req: Request, res: Response) => {
  try {
    const people = await SomePerson.find();
    res.json(people);
  } catch (err) {
    res.send("error" + err);
  }
});
amazingRouter.post("/", async (req: Request, res: Response) => {
  const person = new SomePerson({
    name: req.body.name,
    surname: req.body.surname,
  });

  try {
    const a1 = await person.save();
    res.json(a1);
  } catch (err) {
    res.send("error" + err);
  }
});

amazingRouter.get("/:id", (req: Request, res: Response) => {
  res.send("Hello World!" + req.params.id);
});

amazingRouter.put("/:id", (req: Request, res: Response) => {
  res.send("Got a PUT request at /user");
});

amazingRouter.delete("/:id", (req: Request, res: Response) => {
  res.send("Got a DELETE request at /user");
});

export { amazingRouter };
