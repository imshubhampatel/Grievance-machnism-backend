const User = require("../../schemas/user.model");
const { sendMail } = require("../../services/nodemailer/sendMail");
async function addGrievance(req, res) {
	try {
		const {
			firstName,
			lastName,
			email,
			password,
			enrollmentNumber,
			branch,
			address,
			grievance,
			subject,
			semester,
		} = req.body;
		const newGrievance = await User.create({
			firstName,
			lastName,
			email,
			password,
			enrollmentNumber,
			branch,
			address,
			grievance,
			subject,
			semester,
		});

		const desc = `
            <h1>Grievance</h1>
            <p>${grievance}</p>
             `;
		const mailResponse = await sendMail(
			email,
			subject || "Grievance Support",
			desc
		);
		return res.status(201).json({
			success: true,
			message: "Grievance added successfully",
			data: newGrievance,
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
	}
}
exports.addGrievance = addGrievance;
