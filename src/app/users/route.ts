export const users = [
    { id: 1, name: "Khan" },
    { id: 2, name: "Jaan" },
];

export async function GET() {
    return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name,
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}

export async function PATCH(request: Request) {
    const { id, name } = await request.json();

    // Find the user by id
    const user = users.find((user) => user.id === id);
    if (!user) {
        return new Response(
            JSON.stringify({ error: "User not found" }),
            { headers: { "Content-Type": "application/json" }, status: 404 }
        );
    }

    // Update the user's name
    user.name = name;

    return new Response(JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
