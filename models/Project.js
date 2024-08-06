const { default: mongoose, Schema } = require("mongoose");
const School = require("./School");
const Student = require("./Student");

const ProjectTopic = new mongoose.Schema({
  projectTopic: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  projectType: { type: String, required: true },
});

const ProjectSchema = new mongoose.Schema(
  {
    schoolName: { type: Schema.ObjectId, required: true, ref: School },
    studentName: { type: Schema.ObjectId, required: true, ref: Student },
    projectTopic: { type: [ProjectTopic], required: true, default: [] },
    startDate: { type: Date },
    endDate: { type: Date },
    supervisor: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
