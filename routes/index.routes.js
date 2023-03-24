const { Router } = require("express");
const { addGrievance } = require("./user/addGrievance");
const { getGrievance } = require("./admin/getGrievance");
const { updateStatus } = require("./admin/updateStatus");
const {
  initiateTransaction,
  capturePayment,
  updateTransaction,
} = require("./payments/MakePayment");
const routes = Router();

// User Controllers
routes.post("/addGrievance", addGrievance);
routes.get("/getGrievance", getGrievance);
routes.post("/updateStatus", updateStatus);
routes.post("/razorpay/initiate-transaction", initiateTransaction);
routes.post("/razorpay/razor_capture/:paymentId", capturePayment);
routes.post("/razorpay/update-transaction", updateTransaction);

exports.routes = routes;
