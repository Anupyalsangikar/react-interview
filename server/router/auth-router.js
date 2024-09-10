const express =  require("express");
const authControllers = require("../controllers/auth-controller.js");
const {signupSchema, loginSchema} = require('../validators/auth-validator.js')
const validate = require('../middlewares/validate-middleware.js')

const authRouter = express.Router();

authRouter.get("/", authControllers.home)
authRouter.post("/register",validate(signupSchema), authControllers.register)
authRouter.post("/login",validate(loginSchema), authControllers.login)

module.exports = authRouter;
