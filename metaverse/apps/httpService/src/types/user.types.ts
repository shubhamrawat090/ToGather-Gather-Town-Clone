import z from "zod";

export const SignupSchema = z.object({
  username: z.string().email("Username must be a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
  type: z.enum(["user", "admin"], {
    errorMap: () => ({ message: "Type must be either 'user' or 'admin'" }),
  }),
});

export const SigninSchema = z.object({
  username: z.string().email("Username must be a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
});

export const UpdateMetadataSchema = z.object({
  avatarId: z.string().uuid("Avatar ID must be a valid UUID"),
});
