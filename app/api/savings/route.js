import db from "@/lib/db";
import { NextResponse } from "next/server";

// CREATE: Add a new savings (POST)
export async function POST(request) {
  try {
    const { amount, source, category, description } = await request.json();
    const savings = await db.savings.create({
      data: {  amount: parseFloat(amount), source, category, description  },
    });
    return NextResponse.json(savings, { status: 201 });
  } catch (error) {
    console.error("Error creating savings:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a savings",
      },
      { status: 500 }
    );
  }
}

// READ: Fetch all savingss (GET)
export async function GET() {
  try {
    const savingss = await db.savings.findMany({
      select: {
        id: true,
        amount: true,
        source: true,
        category: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(savingss, { status: 200 });
  } catch (error) {
    console.error("Error fetching savingss:", error);
    return NextResponse.json(
      {
        error,
        message: "Error fetching savingss",
      },
      { status: 500 }
    );
  }
}

// DELETE: Delete an existing savings (DELETE) - Requires ID check
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    const deleteSavings = await db.savings.delete({ where: { id } });
    return NextResponse.json(
      { message: "savings deleted successfully", deleteSavings },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting savings:", error);
    return NextResponse.json(
      {
        error: error.message,
        message: "Error deleting savings",
      },
      { status: 500 }
    );
  }
}
