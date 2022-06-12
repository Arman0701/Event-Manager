import express from "express";
import { createClub, getAllClubs, updatedClub } from "../controllers/club.js";



const router = express.Router();

//create concerts
router.post("/", createClub);

// updated concert
router.put('/:id',updatedClub)

//get All concert
router.get("/", getAllClubs);

export default router;
