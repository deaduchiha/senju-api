import { IAnime } from "@/types/anime";
import mongoose, { Schema } from "mongoose";

const animeSchema: Schema = new mongoose.Schema({
  anime: {
    type: String,
    required: true,
  },
  episodes: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
});

const Anime =
  mongoose.models.Anime || mongoose.model<IAnime>("Anime", animeSchema);

export default Anime;
