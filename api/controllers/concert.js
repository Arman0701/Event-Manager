import Concert from "../models/Concert.js";

export const createConcert = async (req, res, next) => {
  const newConcert = new Concert(req.body);
  try {
    const savedConcert = await newConcert.save();
    res.status(200).json(savedConcert);
  } catch (err) {
    next(err);
  }
};

export const updatedConcert = async (req, res, next) => {
  try {
    await Concert.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("concert has been updated");
  } catch (err) {
    next(err);
  }
};

export const getAllConcerts = async (req, res, next) => {
  try {
    const concerts = await Concert.find();
    res.status(200).json(concerts);
  } catch (err) {
    next(err);
  }
};
