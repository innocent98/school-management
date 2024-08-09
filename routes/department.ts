import { createDeptController, findSchoolDeptController } from "../controllers/departmentController"
import { verifyTokenAndAuthorization } from "../utils/jwt"

const router = require('express').Router()

router.post('/create', verifyTokenAndAuthorization, createDeptController)
router.get('/school_depts', verifyTokenAndAuthorization, findSchoolDeptController)

module.exports = router;