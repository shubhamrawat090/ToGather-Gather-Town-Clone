import { Router } from "express";

export const userRouter = Router();

userRouter.get("/signin", (req, res) => {
  res.json({
    message: "Signin",
  });
});

userRouter.get("/signup", (req, res) => {
  res.json({
    message: "Signup",
  });
});

userRouter.post("/metadata", (req, res) => {});

userRouter.get("/metadata/bulk", (req, res) => {});
