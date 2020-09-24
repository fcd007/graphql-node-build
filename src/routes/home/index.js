import { Router } from "express";

const router = Router();

router.get("/", (require, response) => {
  return response.json({ message: "Router wihout graphql port 3000" });
});

export default router;
