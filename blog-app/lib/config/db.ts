import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://phongtrando2004:9p5MUFbGNaOgMseN@cluster0.r0ggb.mongodb.net/blog-app");
        console.log("Database connected successfully!");
    } catch (error:any) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};


