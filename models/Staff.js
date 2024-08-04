const { default: mongoose } = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    school: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["admin", "lecturer", "bursar", "admission officer", "other staff"],
    },
    phone: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
