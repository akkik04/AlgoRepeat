import mongoose, { Schema } from 'mongoose';

// set up a mongoose model for labels.
const Label = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be empty"],
      unique: true,
      trim: true,
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    // add a reference to the User model.
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Label", Label);