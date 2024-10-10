import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}) {
    try {
      const savings = await db.savings.findUnique({
        where: {id}
      });
      return NextResponse.json(savings, { status: 200 });
    } catch (error) {
      console.error("Error fetching savings:", error);
      return NextResponse.json(
        { message: "Error fetching savings" },
        { status: 500 }
      );
    }
  }

  export async function PUT(request, {params: {id}}) {
    try {
      const { amount, source, category, description } = await request.json();
      const savings = await db.savings.update({
        where: {id},
        data: {  amount: parseFloat(amount), source, category, description  },
      });
      return NextResponse.json(savings, { status: 200 });
    } catch (error) {
      console.error("Error updating savings:", error);
      return NextResponse.json(
        { message: "Error updating savings" },
        { status: 500 }
      );
    }
  }
