const { default: mongoose } = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: true },
    otherNames: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    school: { type: String, required: true },
    enrollmentId: { type: String },
    course: { type: String },
    batch: { type: String },
    studentLevel: { type: String },
    idCard: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
