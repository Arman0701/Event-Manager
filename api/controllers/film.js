import Film from "../models/Film.js";

export const createFilm = async (req, res, next) => {
  const newFilm = new Film(req.body);
  try {
    const savedFilm = await newFilm.save();
    res.status(200).json(savedFilm);
  } catch (err) {
    next(err);
  }
};

export const updatedFilm = async (req, res, next) => {
  try {
    await Film.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("film has been updated");
  } catch (err) {
    next(err);
  }
};

export const getAllFilms = async (req, res, next) => {
  try {
    const films = await Film.find();
    res.status(200).json(films);
  } catch (err) {
    next(err);
  }
};
