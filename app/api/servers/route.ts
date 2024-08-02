import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, imageUrl } = await req.json();
    } catch (error) {
        console.log("[SERVERS_POST]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}