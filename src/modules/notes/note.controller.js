import noteModel from "../../../database/models/note.model.js";
import jwt  from "jsonwebtoken";
// import express from "express";
const addNote = async (req, res) => {
  let adddedNote = await noteModel.insertMany(req.body);
  res.json({ messege: "Added" });
};
const getAllNotes = async (req, res) => {


  let allNotes = await noteModel.find({createdBy: decoded }).select("title").populate({
    path: "createdBy",
    select: "name email -_id",
  });
  res.json({ messege: "finded", allNotes });



};

export { addNote, getAllNotes };
