const { default: mongoose, Schema } = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    school: { type: Schema.Types.ObjectId, required: true, ref: "School" },
    deptName: { type: Schema.Types.ObjectId, required: true },
    faculty: { type: Schema.Types.ObjectId, required: true, ref: "Faculty" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", DepartmentSchema);
