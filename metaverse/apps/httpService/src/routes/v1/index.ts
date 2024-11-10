import { Router } from "express";

export const router = Router();

// SHOULD BE /user/signin and siugnup
router.get("/signin", (req, res) => {
  res.json({
    message: "Signin",
  });
});

router.get("/signup", (req, res) => {
  res.json({
    message: "Signup",
  });
});

router.get("/elements", (req, res) => {});
router.get("/avatars", (req, res) => {});
