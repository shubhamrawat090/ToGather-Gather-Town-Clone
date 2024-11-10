import { Router } from "express";

export const router = Router();

router.get("/signin", (req, res) => {
  res.send("SIGN IN ENDPOINT");
});

router.get("/signup", (req, res) => {
  res.send("SIGN UP ENDPOINT");
});
