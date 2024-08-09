import { createStaffController, findSchoolStaffProfileController, findSchoolStaffsController, staffLoginController } from "../controllers/staffController";
import { verifyTokenAndAuthorization } from "../utils/jwt";

const router = require("express").Router();

router.post('/create', verifyTokenAndAuthorization, createStaffController)
router.post('/login', staffLoginController)
router.get('/school_staff', verifyTokenAndAuthorization, findSchoolStaffsController)
router.get('/staff_profile/:id', verifyTokenAndAuthorization, findSchoolStaffProfileController)

module.exports = router;
