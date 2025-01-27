import { Router } from 'express';
import { createUser, deleteUser, getUser, updateUser, validate } from '../controllers/userController.js';
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js';

const userRoute = Router()

userRoute.post("/create", createUser)
userRoute.get("/get", getUser)
userRoute.delete("/delete/:id",verifyTokenMiddleware,  deleteUser)
userRoute.post("/update/:id",verifyTokenMiddleware,  updateUser)
userRoute.post("/login", validate)

export default userRoute;