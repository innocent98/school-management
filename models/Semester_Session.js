const { default: mongoose } = require("mongoose");

const Semester_Session = new mongoose.Schema(
  {
    school: { type: Schema.Types.ObjectId, required: true, ref: "School" },
    academic_year: { type: String, required: true },
    semester: { type: String },
    term: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Semester_Session", Semester_Session);
