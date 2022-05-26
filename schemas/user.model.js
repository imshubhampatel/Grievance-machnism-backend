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
			required: [true, "Email is required for User"],
			trim: true,
			lowercase: true,
		},
		enrollmentNumber: {
			type: Number,
			required: [true, "Enrollment number is required for User"],
		},
		branch: {
			type: String,
			required: [true, "Branch is required for User"],
		},
		address: {
			type: String,
			required: [true, "Address is required for User"],
		},
		grievance: {
			type: String,
			required: [true, "Grievences is required for User"],
		},
		subject: {
			type: String,
		},
		semester: {
			type: Number,
			required: [true, "Semester is required for User"],
		},
		status: {
			type: String,
			enum: ["pending", "resolved", "rejected"],
			default: "pending",
		},
	},
	{
		timestamps: true,
	}
);

const User = model("User", userSchema);

module.exports = User;
