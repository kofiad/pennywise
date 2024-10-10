import db from "@/lib/db";
import { NextResponse } from "next/server";

// CREATE: Add a new expense (POST)
export async function POST(request) {
  try {
    const { amount, source, category, description } = await request.json();
    const expense = await db.expense.create({
      data: {  amount: parseFloat(amount), source, category, description  },
    });
    return NextResponse.json(expense, { status: 201 });
  } catch (error) {
    console.error("Error creating expense:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a expense",
      },
      { status: 500 }
    );
  }
}

// READ: Fetch all expenses (GET)
export async function GET() {
  try {
    const expenses = await db.expense.findMany({
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
    return NextResponse.json(expenses, { status: 200 });
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return NextResponse.json(
      {
        error,
        message: "Error fetching expenses",
      },
      { status: 500 }
    );
  }
}

// DELETE: Delete an existing expense (DELETE) - Requires ID check
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    const deleteExpense = await db.expense.delete({ where: { id } });
    return NextResponse.json(
      { message: "expense deleted successfully", deleteExpense },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting expense:", error);
    return NextResponse.json(
      {
        error: error.message,
        message: "Error deleting expense",
      },
      { status: 500 }
    );
  }
}
