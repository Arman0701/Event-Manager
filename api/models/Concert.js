import mongoose from "mongoose";

const ConcertSchema = new mongoose.Schema(
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

    month: {
      type: String,
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

export default mongoose.model("Concert", ConcertSchema);
