export function GET(req: Request) {
  return new Response(JSON.stringify({
    version: "1.0.2",
  }));
}
