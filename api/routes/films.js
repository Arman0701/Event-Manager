import express from "express";
import { createFilm, getAllFilms,updatedFilm } from "./../controllers/film.js";

const router = express.Router();

//create films
router.post("/", createFilm);

// updated Film
router.put('/:id',updatedFilm)

//get All films
router.get("/", getAllFilms);

export default router;
