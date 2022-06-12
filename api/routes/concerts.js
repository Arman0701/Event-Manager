import express from "express";
import { createConcert, getAllConcerts, updatedConcert } from "../controllers/concert.js";


const router = express.Router();

//create concerts
router.post("/", createConcert);

// updated concert
router.put('/:id',updatedConcert)

//get All concert
router.get("/", getAllConcerts);

export default router;
