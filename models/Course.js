const { default: mongoose } = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    schoolName: { type: String },
    courseTitle: { type: String, required: true },
    courseCode: { type: String, required: true },
    courseUnits: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
