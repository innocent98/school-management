const { default: mongoose, Schema } = require("mongoose");

const StudentCourseSchema = new mongoose.Schema(
  {
    student: { type: Schema.Types.ObjectId, required: true, ref: "Student" },
    school: { type: Schema.Types.ObjectId, required: true, ref: "School" },
    courseTitle: { type: String, required: true },
    courseCode: { type: String, required: true },
    courseUnits: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentCourse", StudentCourseSchema);
