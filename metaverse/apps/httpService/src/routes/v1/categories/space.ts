import { Router } from "express";

export const spaceRouter = Router();

spaceRouter.post("/", async (req, res) => {});

spaceRouter.delete("/:spaceId", (req, res) => {});

spaceRouter.get("/:spaceId", (req, res) => {});

spaceRouter.get("/all", (req, res) => {});

spaceRouter.post("/element", async (req, res) => {});
spaceRouter.delete("/element", async (req, res) => {});
