const express = require("express");
const {
  fetch,
  create,
  update,
  deleteUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.post("/create", create);
router.get("/getAllUsers", fetch);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser);

module.exports = router;
