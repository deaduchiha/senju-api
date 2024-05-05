import { Document } from "mongoose";

export interface IAnime extends Document {
  anime: string;
  episodes: number;
  cover: string;
  rate: number;
  summary: string;
  creator: string;
  genre: string[];
}
