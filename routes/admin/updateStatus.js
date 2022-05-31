const User = require("../../schemas/user.model");
async function updateStatus(req, res) {
	try {
		const { _id, status } = req.body;
		const grievances = await User.findOneAndUpdate(
			{ _id },
			{ status },
			{ new: true }
		);
		if (grievances == null) {
			return res
				.status(404)
				.json({ success: false, message: "Grievance not found" });
		}
		return res.status(200).json({ success: true, data: grievances });
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
	}
}
exports.updateStatus = updateStatus;
