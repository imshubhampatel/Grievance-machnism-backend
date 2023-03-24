const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required for User"],
      trim: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required for User"],
      trim: true,
      lowercase: true,
    },
    enrollmentNumber: {
      type: String,
      unique: true,
      required: [true, "Enrollment number is required for User"],
    },
    contactNumber: {
      type: Number,
      unique: true,
      required: [true, "Contact number is required for User"],
    },
    branch: {
      type: String,
      required: [true, "Branch is required for User"],
    },
    address: {
      type: String,
      required: [true, "Address is required for User"],
    },

    subject: {
      type: String,
    },
    semester: {
      type: String,
      required: [true, "Semester is required for User"],
    },
    uniqueCode: {
      type: String,
      unique: true,
    },
    paymentStatus: {
      type: String,
      enum: ["FAILED", "REJECTED", "PENDING", "COMPLETED"],
      default: "PENDING",
    },
    status: {
      type: String,
      enum: ["PENDING", "RESOLVED", "REJECTED"],
      default: "PENDING",
    },
    paymentDetails: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
