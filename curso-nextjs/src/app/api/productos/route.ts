import { productos } from "./data";

export async function GET() {
    return Response.json(productos)
}

export async function POST(reques: Request) {
    const productoInput = await reques.json();
    console.log(productoInput)
    const newProduct = {
        id: productos.length + 1,
        name: productoInput.name
    }

     await productos.push(newProduct);

    return new Response(JSON.stringify(newProduct), {
        headers: {
            "Content-Type": "application/hson"
        },
        status: 200,
    })
}
