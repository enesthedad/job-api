import express from "express";
const router = express.Router();
// import controllers
import getJobs, { newJob } from "../controllers/jobsController.mjs";
router.route("/jobs").get(getJobs);
router.route("/jobs/new").post(newJob);

export default router;
