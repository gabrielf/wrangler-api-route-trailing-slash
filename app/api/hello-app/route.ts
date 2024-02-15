export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function GET() {
    return Response.json({
        Hello: ', World! (app)'
    })
}
