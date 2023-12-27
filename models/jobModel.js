import mongoose from "mongoose";
import validator from "validator";
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter Job title."],
    trim: true,
    maxLength: [100, "Job title can not exceed 100 characters."],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please enter job description"],
    maxLength: [1000, "Job title can not exceed 1000 characters."],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please write a valid email"],
    required: [true, "Please enter an email address"],
  },
  address: {
    type: String,
    required: [true, "Please enter company address"],
  },
  company: {
    type: String,
    required: [true, "Please enter company name"],
  },
  industry: {
    type: [String],
    required: [true, "Please select the industry type"],
    enum: {
      values: [
        "Business",
        "Information Technology",
        "Banking",
        "Education/Training",
        "Telecommunication",
        "Others",
      ],
      message: "Please select correct option for industry",
    },
  },
  jobType: {
    type: String,
    required: [true, "Please select the job type"],
    enum: {
      values: ["Permanent", "Part-Time", "Temporary", "Internship"],
      message: "Please select correct option for job type",
    },
  },

  minEducation: {
    type: String,
    required: [true, "Please select the minimum education degree"],
    enum: {
      values: ["College", "Bachelor", "Master", "Phd"],
      message: "Please select minimum education degree for job",
    },
  },
  experience: {
    type: String,
    required: [true, "Please select the required experience"],
    enum: {
      values: [
        "No experience",
        "1-3 Years",
        "3-4 Years",
        "4-6 Years",
        "+6 Years",
      ],
      message: "Please select needed experience",
    },
  },
  salary: {
    type: String,
    required: [true, "Please select the Salary"],
    enum: {
      values: [
        "30.000-40.000$",
        "40.000-50.000$",
        "50.000-60.000$",
        "60.000-70.000$",
        "70.000-80.000$",
        "80.000-90.000$",
        "90.000-100.000$",
      ],
      message: "Please select the salary",
    },
  },
  postingDate: {
    type: Date,
    default: Date.now,
  },
  applicantApplied: {
    type: [Object],
    default: false,
  },
});
const jobModel = mongoose.model("Job", jobSchema);
export default jobModel;
