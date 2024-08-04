const { default: mongoose } = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    schoolName: { type: String, required: true },
    deptName: { type: String, required: true },
    facultyName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", DepartmentSchema);
