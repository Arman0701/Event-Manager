import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    country: {
      type: String,
      required: true,
    },

    phonNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required:true
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
