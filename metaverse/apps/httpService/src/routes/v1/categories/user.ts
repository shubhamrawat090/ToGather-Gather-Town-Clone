import { Router } from "express";
import ZodValidationService from "../../../services/ZodValidation.service";
import UserLogic from "../../../logics/user.logic";

export const userRouter = Router();

userRouter.get("/signin", UserLogic.signin);

userRouter.get("/signup", UserLogic.signup);

userRouter.post("/metadata", (req, res) => {});

userRouter.get("/metadata/bulk", (req, res) => {});
