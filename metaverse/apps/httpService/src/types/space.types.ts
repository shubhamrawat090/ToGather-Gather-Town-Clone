import z from "zod";

export const CreateSpaceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  dimensions: z
    .string()
    .regex(
      /^[0-9]{1,4}x[0-9]{1,4}$/,
      "Dimensions must be in 'NxN' format where N is a maximum 4-digit number."
    ),
  mapId: z.string().uuid("Map ID must be a valid UUID"),
});

export const AddElementSchema = z.object({
  elementId: z.string().min(1, "Element ID is required"),
  spaceId: z.string().uuid("Space ID must be a valid UUID"),
  x: z
    .number()
    .int()
    .nonnegative("X coordinate must be a non-negative integer"),
  y: z
    .number()
    .int()
    .nonnegative("Y coordinate must be a non-negative integer"),
});
