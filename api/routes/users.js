import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "./../controllers/User.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Update
router.put("/:id", verifyUser, updateUser);

//Delete

router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);

//Get All

router.get("/", getUsers);

export default router;
