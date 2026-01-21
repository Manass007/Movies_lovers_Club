const mongoose = require("mongoose");

// Define Student Schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 100,
    },
    course: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    subjects: [
      {
        type: String,
      },
    ],
    enrolled: {
      type: Boolean,
      default: true,
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    city: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Text index for searching by name
studentSchema.index({ name: "text" });

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
