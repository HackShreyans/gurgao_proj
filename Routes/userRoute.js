const express = require("express");
const { addUser, findUser } = require("../Controllers/userController");

const router = express.Router();

router.post("/user/api/post", addUser);
router.get("/user/api/get", findUser);

module.exports = router;
