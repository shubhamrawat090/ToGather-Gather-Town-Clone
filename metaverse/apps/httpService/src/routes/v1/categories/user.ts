import { Router } from "express";
import { SignupSchema } from "../../../types/user.types";
import ZodValidationService from "../../../services/ZodValidation.service";
import UserLogic from "../../../logics/user.logic";

export const userRouter = Router();

userRouter.get("/signin", (req, res) => {
  // check the user,
  // put something in DB
  res.json({
    message: "Signin",
  });
});

userRouter.get("/signup", UserLogic.signup);

userRouter.post("/metadata", (req, res) => {});

userRouter.get("/metadata/bulk", (req, res) => {});
