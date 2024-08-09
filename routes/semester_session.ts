import { createSemester_sessionController, findSchoolSemester_SessionController } from "../controllers/semester_sessionController";
import { verifyTokenAndAuthorization } from "../utils/jwt";

const router = require("express").Router();

router.post('/create', verifyTokenAndAuthorization, createSemester_sessionController)
router.get('/school_semester_session', verifyTokenAndAuthorization, findSchoolSemester_SessionController)

module.exports = router;
