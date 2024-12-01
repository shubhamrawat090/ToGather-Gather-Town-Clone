import { Router } from "express";
import { userRouter } from "./categories/user";

export const router = Router();

router.use("/user", userRouter);

router.get("/elements", (req, res) => {});
router.get("/avatars", (req, res) => {});
