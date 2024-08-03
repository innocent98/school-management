const { default: mongoose } = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    schoolName: { type: String },
    deptName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", DepartmentSchema);
