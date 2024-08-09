import { createFacultyController, findSchoolFacultiesController } from "../controllers/facultyController";
import { verifyTokenAndAuthorization } from "../utils/jwt"

const router = require('express').Router()

router.post('/create', verifyTokenAndAuthorization, createFacultyController)
router.get('/school_faculties', verifyTokenAndAuthorization, findSchoolFacultiesController)

module.exports = router;
