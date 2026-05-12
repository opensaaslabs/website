export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'opensaaslabs-website',
    timestamp: new Date().toISOString(),
  })
}
