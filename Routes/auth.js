import express from "express";
import { Router } from "express";
import User from "../Model/User.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config({ path: "./Config/.env" });
import jwt from "jsonwebtoken";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const user = await User.signup(req.body);
    console.log("hello");
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });
    console.log(token);
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send({ msg: "server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.login(req.body);
    console.log(user);
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });
    res.status(200).send({ token });
  } catch (err) {
    res.status(401).send({ msg: "user not available" });
  }
});

export default router;
