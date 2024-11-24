import { Request, Response } from "express";
import ZodValidationService from "../services/ZodValidation.service";
import { SignupSchema } from "../types/user.types";
import { SafeParseError } from "zod";

class UserLogic {
  constructor() {}

  async signup(req: Request, res: Response) {
    const parsedData = SignupSchema.safeParse(req.body);

    if (!parsedData.success) {
      res.status(400).json({
        message: ZodValidationService.getErrorMessageFromParsedData(
          parsedData as SafeParseError<any>
        ),
      });
      return;
    }

    res.json({
      message: "Signup Successful",
    });
  }
}

export default new UserLogic();
