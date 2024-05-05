import connectDB from "@/lib/connectDB";
import Anime from "@/models/Anime";

export const GET = async (request: Request) => {
  await connectDB();

  try {
    const anime = await Anime.find({});
    return Response.json(anime);
  } catch (error: unknown) {
    if (error instanceof Error)
      return Response.json({
        error: error.message,
      });
  }
};
