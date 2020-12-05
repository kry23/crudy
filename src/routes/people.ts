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

amazingRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const person = await SomePerson.findById(req.params.id);
    res.json(person);
  } catch (err) {
    res.send("Error" + err);
  }
});

amazingRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const person = await SomePerson.findByIdAndUpdate(req.params.id);
    person.name = req.body.name;
    const a1 = await person.save();
    res.json(a1);
  } catch (err) {
    res.send("Error" + err);
  }
});

amazingRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const person = await SomePerson.remove({ id: req.params.id });

    res.json(person);
  } catch (err) {
    res.send("Error" + err);
  }
});

export { amazingRouter };
