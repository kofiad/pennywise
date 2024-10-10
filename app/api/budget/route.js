import db from "@/lib/db";
import { NextResponse } from "next/server";

// CREATE: Add a new budget (POST)
export async function POST(request) {
  try {
    const { amount, source, category, description } = await request.json();
    const budget = await db.budget.create({
      data: {  amount: parseFloat(amount), source, category, description  },
    });
    return NextResponse.json(budget, { status: 201 });
  } catch (error) {
    console.error("Error creating budget:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a budget",
      },
      { status: 500 }
    );
  }
}

// READ: Fetch all budgets (GET)
export async function GET() {
  try {
    const budgets = await db.budget.findMany({
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
    return NextResponse.json(budgets, { status: 200 });
  } catch (error) {
    console.error("Error fetching budgets:", error);
    return NextResponse.json(
      {
        error,
        message: "Error fetching budgets",
      },
      { status: 500 }
    );
  }
}

// DELETE: Delete an existing budget (DELETE) - Requires ID check
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    const deleteBudget = await db.budget.delete({ where: { id } });
    return NextResponse.json(
      { message: "budget deleted successfully", deleteBudget },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting budget:", error);
    return NextResponse.json(
      {
        error: error.message,
        message: "Error deleting budget",
      },
      { status: 500 }
    );
  }
}
