import { Request, Response } from "express";
import ZodValidationService from "../services/ZodValidation.service";
import { SigninSchema, SignupSchema } from "../types/user.types";
import { SafeParseError } from "zod";
import client from "@repo/db/client";
import jwt from "jsonwebtoken";
import { hash, compare } from "../scrypt";
import { JWT_PASSWORD } from "../config";

class UserLogic {
  constructor() {}

  async signup(req: Request, res: Response) {
    const parsedData = SignupSchema.safeParse(req.body);

    console.log(process.env.JWT_PASSWORD);
    if (!parsedData.success) {
      res.status(400).json({
        message: ZodValidationService.getErrorMessageFromParsedData(
          parsedData as SafeParseError<any>
        ),
      });
      return;
    }

    const { username, password, type } = parsedData.data;

    const hashedPassword = await hash(password);

    try {
      const user = await client.user.create({
        data: {
          username: username,
          password: hashedPassword,
          role: type === "admin" ? "Admin" : "User",
        },
      });
      res.json({
        userId: user.id,
        message: "Signup Successful",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "User already exists" });
    }
  }

  async signin(req: Request, res: Response) {
    const parsedData = SigninSchema.safeParse(req.body);
    if (!parsedData.success) {
      res.status(403).json({
        message: ZodValidationService.getErrorMessageFromParsedData(
          parsedData as SafeParseError<any>
        ),
      });
      return;
    }
    const { username, password: sentPassword } = parsedData.data;

    try {
      const user = await client.user.findUnique({
        where: {
          username,
        },
      });
      if (!user) {
        res.status(403).json({ message: "User not found" });
        return;
      }

      const isPasswordValid = await compare(sentPassword, user.password);
      if (!isPasswordValid) {
        res.status(403).json({ message: "Invalid Passwordd" });
        return;
      }

      const token = jwt.sign(
        {
          userId: user.id,
          role: user.role,
        },
        JWT_PASSWORD
      );

      res.json({
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Internal Server Error" });
    }
  }
}

export default new UserLogic();
