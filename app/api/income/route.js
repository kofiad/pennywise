import db from "@/lib/db";
import { NextResponse } from "next/server";

// CREATE: Add a new income (POST)
export async function POST(request) {
  try {
    const { amount, source, category, description } = await request.json();
    const income = await db.income.create({
      data: {  amount: parseFloat(amount), source, category, description  },
    });
    return NextResponse.json(income, { status: 201 });
  } catch (error) {
    console.error("Error creating income:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a income",
      },
      { status: 500 }
    );
  }
}

// READ: Fetch all incomes (GET)
export async function GET() {
  try {
    const incomes = await db.income.findMany({
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
    return NextResponse.json(incomes, { status: 200 });
  } catch (error) {
    console.error("Error fetching incomes:", error);
    return NextResponse.json(
      {
        error,
        message: "Error fetching incomes",
      },
      { status: 500 }
    );
  }
}

// DELETE: Delete an existing income (DELETE) - Requires ID check
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    const deleteIncome = await db.income.delete({ where: { id } });
    return NextResponse.json(
      { message: "income deleted successfully", deleteIncome },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting income:", error);
    return NextResponse.json(
      {
        error: error.message,
        message: "Error deleting income",
      },
      { status: 500 }
    );
  }
}
