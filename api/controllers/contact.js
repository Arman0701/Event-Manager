import Contact from "../models/Contact.js";

export const createContact = async (req, res, next) => {
  const newContact = new Contact(req.body);

  try {
    const savedContact = await newContact.save();
    res.status(200).json(savedContact);
  } catch (err) {
    next(err);
  }
};
