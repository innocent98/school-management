import { createStudentController, studentLoginController, studentProfileController } from "../controllers/studentController";
import { verifyTokenAndAuthorization } from "../utils/jwt";

const router = require("express").Router();

router.post('/create/:id', verifyTokenAndAuthorization, createStudentController )
router.post('/login', studentLoginController )
router.get('/student_profile', verifyTokenAndAuthorization, studentProfileController )

module.exports = router;
