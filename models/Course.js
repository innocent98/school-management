const { default: mongoose, Schema } = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    school: { type: Schema.Types.ObjectId, required: true, ref: "School" },
    courseTitle: { type: String, required: true },
    courseCode: { type: String, required: true },
    courseUnits: { type: String, required: true },
    lectInCharge: { type: String, required: true },
    faculty: { type: Schema.Types.ObjectId, required: true, ref: "Faculty" },
    dept: { type: Schema.Types.ObjectId, required: true, ref: "Department" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
