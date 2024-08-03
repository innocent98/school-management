const { default: mongoose } = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    schoolName: { type: String, required:true },
    courseTitle: { type: String, required: true },
    courseCode: { type: String, required: true },
    courseUnits: { type: String, required: true },
    lectInCharge: { type: String, required: true },
    facultyName: { type: String, required: true },
    deptName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
