import mongoose from "mongoose"; 
import { Schema, model } from "mongoose";

// set up a mongoose model for tasks.
const Task = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title cannot be empty'],
      trim: true,
      minlength: 3,
    },
    status: [
      {
        type: {
          type: String,
          required: true,
          enum: ['New', 'In Progress', 'Completed'],
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    isArchived: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    scheduledPracticeDates: {
      type: [Date], // Array to store scheduled dates
    },
    // add a reference to the User model.
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// Middleware to update scheduledPracticeDates before saving
Task.pre('save', function (next) {
  const currentDate = this.createdAt;
  const scheduledDates = [];

  // Calculate spaced repetition dates
  for (let i = 1; i <= 35; i = i * 2) {
    scheduledDates.push(new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000));
  }

  this.scheduledPracticeDates = scheduledDates;
  next();
});

export default mongoose.model("Task", Task);
