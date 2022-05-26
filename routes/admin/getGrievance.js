const User = require("../../schemas/user.model");
async function getGrievance(req, res) {
	try {
		const status = req.query.status;
		const skip = parseInt(req.query.skip);
		if (!status) {
			const allGrievances = await User.find({})
				.skip(skip || 0)
				.limit(10);
			return res.status(200).json({ success: true, data: allGrievances });
		} else {
			const grievances = await User.find({ status: status })
				.skip(skip || 0)
				.limit(10);
			return res.status(200).json({ success: true, data: grievances });
		}
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
	}
}
exports.getGrievance = getGrievance;
