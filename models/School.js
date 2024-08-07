const { default: mongoose, Schema } = require("mongoose");

const ContactInfoSchema = new mongoose.Schema({
  contactEmail: { type: String },
  contactPhone: { type: String },
});

const SchoolSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: true },
    otherNames: { type: String, required: true },
    schoolName: { type: String, required: true },
    schoolLogo: { type: String, required: true },
    dropdownImg: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    schoolAddress: { type: String, required: true },
    schoolPhone: { type: String, required: true },
    noOfSearch: { type: Number, default: 0 },
    contactInfo: { type: ContactInfoSchema, default: {} },
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    staffs: [{ type: Schema.Types.ObjectId, ref: "Staff" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("School", SchoolSchema);
