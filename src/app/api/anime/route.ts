export async function GET(request: Request) {
  return Response.json([
    { id: 1, anime: "Naruto" },
    { id: 2, anime: "Jujutsu kaisen" },
    { id: 3, anime: "Tokyo ghoul" },
  ]);
}
