import { createProjectController } from "../controllers/projectController";
import { verifyTokenAndAuthorization } from "../utils/jwt";

const router = require("express").Router();

router.post("/create", verifyTokenAndAuthorization, createProjectController);

module.exports = router;
