import { Router } from 'express'
import { createCar, deleteCar, findCarById, findCarByName, getCar, updateCar } from '../controllers/carController.js'
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js'


const carRoute = Router()

carRoute.post("/create", createCar)
carRoute.get("/get",getCar)
carRoute.post("/update/:id",verifyTokenMiddleware, updateCar)
carRoute.delete("/delete/:id",verifyTokenMiddleware,deleteCar)
carRoute.get("/get-by-id/:id",findCarById)
carRoute.post("/get-by-name", findCarByName)
export default carRoute;