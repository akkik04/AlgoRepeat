import mongoose, { Schema } from 'mongoose';

// set up a mongoose model for tasks.
const taskSchema = new Schema(
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

    // add a reference to the Label model.
    labels: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Label',
      },
    ],

    // add a reference to the User model.
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);