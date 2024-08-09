import { createStudentController } from "../controllers/studentController";
import { findStudentCoursesController } from "../controllers/studentCourseController";
import { verifyTokenAndAuthorization } from "../utils/jwt";

const router = require("express").Router();

router.post('/create', verifyTokenAndAuthorization, createStudentController)
router.get('/student_courses', verifyTokenAndAuthorization, findStudentCoursesController)

module.exports = router;
