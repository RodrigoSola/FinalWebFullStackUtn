import { Router } from "express";
import { createBrand, deleteBrand, getBrand, updateBrand } from "../controllers/brandController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const brandRoute = Router()

brandRoute.get('/get',getBrand)
brandRoute.post('/create',verifyTokenMiddleware,createBrand)
brandRoute.delete('/delete/:id',verifyTokenMiddleware,deleteBrand)
brandRoute.post("/update/:id", verifyTokenMiddleware,updateBrand)



export default brandRoute;