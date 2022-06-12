import mongoose from "mongoose";

const FilmSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    post: {
      type: String,
      required: true,
      unique: true,
    },
    priceFilm: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Film", FilmSchema);
