const { default: mongoose, Schema } = require("mongoose");

const ExamsAndRecordsSchema = new mongoose.Schema(
  {
    school: { type: Schema.Types.ObjectId, required: true, ref: "School" },
    semester_session: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExamsAndRecords", ExamsAndRecordsSchema);
