import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
import { connectDB } from "@/lib/config/db";

const loadDB = async () => {
    await connectDB();
}

loadDB();

export async function GET(request: NextRequest) {
    try {
        const blogId = request.nextUrl.searchParams.get("id");
        if (blogId) {
            const blog = await BlogModel.findById(blogId);
            return NextResponse.json({blog});
        }
        else {
            const blogs = await BlogModel.find({});
            return NextResponse.json({blogs});
        }
    }
    catch (err) {
        console.error("error fetching blogs");
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();
        const image = formData.get("image");

        if (!image || !(image instanceof Blob)) {
            return NextResponse.json({ error: "Image is required" }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: formData.get("title")?.toString() || "",
            description: formData.get("description")?.toString() || "",
            category: formData.get("category")?.toString() || "",
            author: formData.get("author")?.toString() || "",
            image: imgUrl,
            author_img: formData.get("author_img")?.toString() || "",
        };

        await BlogModel.create(blogData);

        return NextResponse.json({ msg: "Blog created successfully", imgUrl });
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}
