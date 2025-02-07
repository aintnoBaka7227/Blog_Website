import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModels";

const loadDB = async () => {
    await connectDB();
}

loadDB();

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();
        const emailData = {
            email: formData.get('email')?.toString() || "",
        }
        await EmailModel.create(emailData);
        return NextResponse.json({success: true,msg: "Email successfully added"})
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({error: "failed to add email subscription"}, {status: 500})
    }
}