const { default: mongoose } = require("mongoose");

const StudentCourseSchema = new mongoose.Schema(
  {
    studentId: { type: String },
    courseTitle: { type: String, required: true },
    courseCode: { type: String, required: true },
    courseUnits: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentCourse", StudentCourseSchema);
