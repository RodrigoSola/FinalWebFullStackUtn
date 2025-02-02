import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import session from "express-session";
import { PORT} from "../src/config.js";
import { connectDb } from "../src/db/db.js";
import userRoute from "../src/routes/userRoute.js";
import carRoute from "../src/routes/carsRoute.js";
import brandRoute from "../src/routes/brandRoute.js";


const app = express();

app.use(cors(
    {origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],}
))

app.use(bodyParser.json())



app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))

connectDb().then(() => {
    app.use("/api/users", userRoute)
    app.use("/api/cars", carRoute)
    app.use("/api/brands", brandRoute)



    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`)
    })
}).catch(err =>{
    console.error("error connecting to MongoDB:", err)
    process.exit(1)
 
})



