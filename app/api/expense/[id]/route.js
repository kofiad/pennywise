import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}) {
    try {
      const expense = await db.expense.findUnique({
        where: {id}
      });
      return NextResponse.json(expense, { status: 200 });
    } catch (error) {
      console.error("Error fetching expense:", error);
      return NextResponse.json(
        { message: "Error fetching expense" },
        { status: 500 }
      );
    }
  }

  export async function PUT(request, {params: {id}}) {
    try {
      const { amount, source, category, description } = await request.json();
      const expense = await db.expense.update({
        where: {id},
        data: {  amount: parseFloat(amount), source, category, description  },
      });
      return NextResponse.json(expense, { status: 200 });
    } catch (error) {
      console.error("Error updating expense:", error);
      return NextResponse.json(
        { message: "Error updating expense" },
        { status: 500 }
      );
    }
  }
