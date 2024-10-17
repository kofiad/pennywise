import db from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
  const { name, email, password } = await request.json();
  const userExists = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (userExists) {
    return NextResponse.json({
      message: "User already exists",
      user: null,
    },
    {
      status: 409,
    });
  }

  const hashedPassword = await hash(password, 10);
  const newUser = await db.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(newUser, {status: 201});
  }  catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        error: "Failed to create a user",
        details: error.message
      },
      { status: 500 }
    );
  }
}


// READ: Handle GET request to fetch all users
export async function GET() {
  try {
    const users = await db.user.findMany(
      {
        orderBy: {
          createdAt: 'desc'
        }
      }
    );
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }
}

// DELETE: Delete an existing user (DELETE) - Requires ID check
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    const deleteuser = await db.user.delete({ where: { id } });
    return NextResponse.json(
      { message: "user deleted successfully", deleteuser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      {
        error: error.message,
        message: "Error deleting user",
      },
      { status: 500 }
    );
  }
}
