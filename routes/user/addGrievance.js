const User = require("../../schemas/user.model");
const { sendMail } = require("../../services/nodemailer/sendMail");
async function addGrievance(req, res) {
  console.log(req.body);
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
      contactNumber,
      date,
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
      contactNumber,
    });

    const desc = `
            <h2>Grievance</h2>
            <p>${grievance}</p>
             `;
    const mailResponse = await sendMail(
      // "principalbtirtsagar@gmail.com",
      "shubhampatel@appslure.com",
      subject || "Grievance Support",
      `<div
      style="
        font-family: Helvetica, Arial, sans-serif;
        min-width: 1000px;
        overflow: auto;
        line-height: 2;
      "
    >
      <div style="margin: 50px auto; width: 70%; padding: 20px 0">
        <div style="border-bottom: 1px solid #eee">
          <a
            href="https://www.btirt.ac.in"
            style="
              font-size: 1.4em;
              color: #e52b50;
              text-decoration: none;
              font-weight: 600;
            "
            >Babulal tarabai institute of research and technology Grievance</a
          >
        </div>
        <p style="font-size: 1.1em">Sir, I'm ${firstName} </p>
        <p style="font-size: 1.1em">Name     : ${firstName} ${lastName}</p>
        <p style="font-size: 1.1em">Branch   : ${branch}</p>
        <p style="font-size: 1.1em">Semester : ${semester}</p>
        <p style="font-size: 1.1em">Enroll.  : ${enrollmentNumber}</p>
        <p style="font-size: 1.1em">email    : ${email}</p>
        <p style="font-size: 1.1em">Phone    : ${contactNumber}</p>
        <p style="font-size: 1.1em">Address  : ${address}</p>
        <p style="font-size: 1.1em">Date  : ${date.split("T")[0]}</p>
       
        <h2
          style="
            background: #e52b50;
            margin: 0 auto;
            width: max-content;
            padding: 0 10px;
            color: #fff;
            border-radius: 4px;
          "
        >
          ${desc}
        </h2>
        <p>
        Waiting for your kind response, Thank you</p>
        <p style="font-size: 0.9em">Regards<br /></p>
        <hr style="border: none; border-top: 1px solid #eee" />
        <div
          style="
            float: right;
            padding: 8px 0;
            color: #aaa;
            font-size: 0.8em;
            line-height: 1;
            font-weight: 300;
          "
        >
          <p Principal BTIRT </p>
          <p> Sironja, Sagar </p>
          <p> Madhya Pradesh, India </p>
        </div>
      </div>
    </div>
    `
    );
    const mailResponse2 = await sendMail(
      email,
      subject || "Grievance Support",
      `<div
      style="
        font-family: Helvetica, Arial, sans-serif;
        min-width: 1000px;
        overflow: auto;
        line-height: 2;
      "
    >
      <div style="margin: 50px auto; width: 70%; padding: 20px 0">
        <div style="border-bottom: 1px solid #eee">
          <a
          href="https://www.btirt.ac.in"
          style="
              font-size: 1.4em;
              color: #e52b50;
              text-decoration: none;
              font-weight: 600;
            "
            >Babulal tarabai institute of research and technology Grievance</a
          >
        </div>
        <p style="font-size: 1.1em">Hey ${firstName} ${lastName},</p>
       
        <h2
          style="
            background: #e52b50;
            margin: 0 auto;
            width: max-content;
            padding: 0 10px;
            color: #fff;
            border-radius: 4px;
          "
        >
          ${desc}
        </h2>
        <p>
        Thank you for using  BTIRT GRIEVANCE REDRESSAL MANAGEMENT PORTAL
        . We will respond you soon.
      </p>
        <p style="font-size: 0.9em">Regards,<br /></p>
        <hr style="border: none; border-top: 1px solid #eee" />
        <div
          style="
            float: right;
            padding: 8px 0;
            color: #aaa;
            font-size: 0.8em;
            line-height: 1;
            font-weight: 300;
          "
        >
          <p>Principal BTIRT</p>
          <p> Sironja, Sagar</p>
          <p>Madhya Pradesh, India</p>
        </div>
      </div>
    </div>
    `
    );
    console.log("mail send", mailResponse);
    console.log("mail send", mailResponse2);
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
