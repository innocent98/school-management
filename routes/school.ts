import {
  createSchoolController,
  findSchoolsController,
  loginSchoolController,
} from "../controllers/schoolController";

const router = require("express").Router();

router.post("/create", createSchoolController);
router.post("/login", loginSchoolController);
router.get("/schools", findSchoolsController);

module.exports = router;
