import { createExamsAndRecordsController, findSchoolExamAndRecordController, findSchoolExamsAndRecordsController } from "../controllers/examsAndRecordsController"
import { verifyTokenAndAuthorization } from "../utils/jwt"

const router = require('express').Router()

router.post('/create', verifyTokenAndAuthorization, createExamsAndRecordsController)
router.get('/school_exam_records', verifyTokenAndAuthorization, findSchoolExamsAndRecordsController)
router.get('/school/exam_record', verifyTokenAndAuthorization, findSchoolExamAndRecordController)

module.exports = router;