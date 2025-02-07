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

export async function GET(request: NextRequest) {
    try {
        const emails = await EmailModel.find({});
        return NextResponse.json({emails});
    }
    catch (error) {
        console.error("error fetching emails");
        return NextResponse.json({error: "failed to fetch emails"}, { status: 500})
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get('mongoID');
        if (!id) {
            return NextResponse.json({ error: "Email ID is required" }, { status: 400 });
        }
        const email = await EmailModel.findById(id);
        if (!email) {
            return NextResponse.json({ error: "Email not found" }, { status: 404 });
        }
        await EmailModel.findByIdAndDelete(id);
        return NextResponse.json({msg: "Email deleted successfully"});
        }
    catch (error) {
        console.error("Error saving email:", error);
        return NextResponse.json({ error: "Failed to delete Email" }, { status: 500 });
    }
}