const { default: mongoose, Schema } = require("mongoose");
const Student = require("./Student");
const Course = require("./Course");
const School = require("./School");

const ExamsAndRecordsSchema = new mongoose.Schema(
  {
    school: { type: Schema.ObjectId, required: true, ref: School },
    semester_session: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: Student }],
    courses: [{ type: Schema.Types.ObjectId, ref: Course }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExamsAndRecords", ExamsAndRecordsSchema);
