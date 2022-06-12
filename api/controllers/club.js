import Club from "../models/Club.js";

export const createClub = async (req, res, next) => {
  const newClub = new Club(req.body);
  try {
    const savedClub = await newClub.save();
    res.status(200).json(savedClub);
  } catch (err) {
    next(err);
  }
};

export const updatedClub = async (req, res, next) => {
  try {
    await Club.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Club has been updated");
  } catch (err) {
    next(err);
  }
};

export const getAllClubs = async (req, res, next) => {
  try {
    const clubs = await Concert.find();
    res.status(200).json(clubs);
  } catch (err) {
    next(err);
  }
};
