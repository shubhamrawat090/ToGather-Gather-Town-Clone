import z from "zod";

export const CreateElementSchema = z.object({
  imageUrl: z.string().url(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  static: z.boolean(),
});

export const UpdateElementSchema = z.object({
  imageUrl: z.string().url(),
});

export const CreateAvatarSchema = z.object({
  imageUrl: z.string().url(),
  name: z.string().min(1, "Name is required"),
});

export const CreateMapSchema = z.object({
  thumbnail: z.string().url(),
  dimensions: z
    .string()
    .regex(
      /^[0-9]{1,4}x[0-9]{1,4}$/,
      "Dimensions must be in 'NxN' format where N is a maximum 4-digit number."
    ),
  name: z.string().min(1, "Name is required"),
  defaultElements: z.array(
    z.object({
      elementId: z.string().min(1, "Element ID is required"),
      x: z.number().int().nonnegative(),
      y: z.number().int().nonnegative(),
    })
  ),
});
