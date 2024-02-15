export const runtime = 'edge'

export default async function handler(req: Request) {
    return Response.json({
        Hello: ', World! (pages)'
    })
}
