import mongoose from "mongoose"; 
import { Schema, model } from "mongoose";

// set up a mongoose model
const User = new Schema(
    {
        // retrieve the user's name, email and password.
        name: { 
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 64,
        },
    },

    // add createdAt and updatedAt fields
    { timestamps: true }
);

// export the model for use in other files.
export default mongoose.model("User", User);