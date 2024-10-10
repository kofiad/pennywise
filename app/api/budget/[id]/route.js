import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}) {
    try {
      const budget = await db.budget.findUnique({
        where: {id}
      });
      return NextResponse.json(budget, { status: 200 });
    } catch (error) {
      console.error("Error fetching budget:", error);
      return NextResponse.json(
        { message: "Error fetching budget" },
        { status: 500 }
      );
    }
  }

  export async function PUT(request, {params: {id}}) {
    try {
      const { amount, source, category, description } = await request.json();
      const budget = await db.budget.update({
        where: {id},
        data: {  amount: parseFloat(amount), source, category, description  },
      });
      return NextResponse.json(budget, { status: 200 });
    } catch (error) {
      console.error("Error updating budget:", error);
      return NextResponse.json(
        { message: "Error updating budget" },
        { status: 500 }
      );
    }
  }
