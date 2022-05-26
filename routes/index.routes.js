const { Router } = require("express");
const { addGrievance } = require("./user/addGrievance");
const { getGrievance } = require("./admin/getGrievance");
const { updateStatus } = require("./admin/updateStatus");
const routes = Router();

// User Controllers
routes.post("/addGrievance", addGrievance);
routes.get("/getGrievance", getGrievance);
routes.post("/updateStatus", updateStatus);

exports.routes = routes;
