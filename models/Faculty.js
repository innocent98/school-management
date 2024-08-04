const { default: mongoose } = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    schoolName: { type: String, required: true },
    facultyName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", FacultySchema);
