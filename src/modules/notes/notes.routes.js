import { addNote, getAllNotes } from "./note.controller.js";
import express from "express";
const noteRoute = express.Router();

noteRoute.post("/note", addNote);
noteRoute.get("/note", getAllNotes);

export default noteRoute;
