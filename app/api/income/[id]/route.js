import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}) {
    try {
      const income = await db.income.findUnique({
        where: {id}
      });
      return NextResponse.json(income, { status: 200 });
    } catch (error) {
      console.error("Error fetching income:", error);
      return NextResponse.json(
        { message: "Error fetching income" },
        { status: 500 }
      );
    }
  }

  export async function PUT(request, {params: {id}}) {
    try {
      const { amount, source, category, description } = await request.json();
      const income = await db.income.update({
        where: {id},
        data: {  amount, source, category, description  },
      });
      return NextResponse.json(income, { status: 200 });
    } catch (error) {
      console.error("Error updating income:", error);
      return NextResponse.json(
        { message: "Error updating income" },
        { status: 500 }
      );
    }
  }
