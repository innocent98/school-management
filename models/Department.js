const { default: mongoose, Schema } = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    school: { type: Schema.Types.ObjectId, required: true, ref: "School" },
    deptName: { type: String, required: true },
    facultyName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", DepartmentSchema);
