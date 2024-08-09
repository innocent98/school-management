import { createCourseController, findSchoolCoursesController } from "../controllers/courseController";
import { verifyTokenAndAuthorization } from "../utils/jwt";

const router = require("express").Router();

router.post("/create", verifyTokenAndAuthorization, createCourseController);
router.get("/school_courses", verifyTokenAndAuthorization, findSchoolCoursesController)

module.exports = router;
