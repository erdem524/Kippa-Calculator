const express = require("express");
const router = express.Router();
usersRoute = require("../users/users");

router.get("/", usersRoute.users);
module.exports = router;
