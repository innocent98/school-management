const { default: mongoose, Schema } = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    school: { type: Schema.Types.ObjectId, required: true, ref: 'School' },
    facultyName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", FacultySchema);
