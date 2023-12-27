import jobModel from "../models/jobModel.js";

// Get all jobs => API/V1/JOBS

const getJobs = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Page will shown",
  });
};

// Create a new job => api/v1/job/new
const newJob = async (req, res, next) => {
  const job = await jobModel.create(req.body);
  res.status(200).json({
    success: true,
    message: "Job created",
    data: job,
  });
};

export { newJob };
export default getJobs;
