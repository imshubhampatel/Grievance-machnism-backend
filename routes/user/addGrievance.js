const User = require("../../schemas/user.model");
const { sendMail } = require("../../services/nodemailer/sendMail");
async function addGrievance(req, res) {
  console.log(req.body);
  try {
    const {
      firstName,
      lastName,
      email,
      enrollmentNumber,
      branch,
      address,
      semester,
      contactNumber,
    } = req.body;

    const isUserRegistered = await User.findOne({ email });
    console.log("registed", isUserRegistered);
    if (isUserRegistered !== null) {
      return res.status(403).json({
        success: false,
        message: "User already registered",
      });
    }

    let uniqueCode = Date.now().toString(36);
    console.log({ uniqueCode });

    const newGrievance = await User.create({
      firstName,
      lastName,
      email,
      branch,
      enrollmentNumber,
      semester,
      address,
      contactNumber,
      uniqueCode,
    });
    console.log(req.body);

    return res.status(201).json({
      success: true,
      message: "User Registered successfully",
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
