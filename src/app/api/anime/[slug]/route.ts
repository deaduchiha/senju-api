export async function GET(
  request: Request,
  { params }: { params: { slug: number } }
) {
  const slug = params.slug;
  if (typeof slug === "number") {
    return Response.json({
      status: 400,
      message: "wrong ID",
    });
  } else {
    console.log(slug);
    return Response.json({ "nothing to show": "1" });
  }
}
