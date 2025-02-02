import Car from '../models/carsModel.js'


export const createCar = async (req, res) => {
    try {
        const carData = new Car(req.body)
        const { name } = carData
        const carExist = await Car.findOne({ name })
        if (carExist) {
            return res.status(400).json({ message: 'Car already exists' })
        }
        const savedCar = await carData.save()
        return res.status(201).json({ message: "Car created", car: savedCar})
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
    }
}

export const getCar = async (req,res) => {
    try {
        const cars = await Car.find().populate("brand")
        if(cars.length === 0){
            return res.status(404).json({ message: "Car not found", error })
        }
        return res.status(200).json(cars)
    } catch (error) {
        console.log(error); 
        return res.status(500).json({ message: "Internal server error", error })
    }
}

export const updateCar = async (req,res) => {
    try {
        const _id = req.params.id 
    const carExist = await Car.findOne({ _id }) 
    if(!carExist){
        return res.status(404).json({ message: "Car not found", error })
    }
    const updatedCar = await Car.updateOne({ _id }, req.body)
    return res.status(201).json({ message: "Car updated successfully", car: updatedCar})
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
        
    }
}


export const deleteCar = async (req,res) => {
    try {
        const _id = req.params.id 
    const carExist = await Car.findOne({ _id }) 
    if(!carExist){
        return res.status(404).json({ message: "Car not found", error })
    }
    const deletedCar = await Car.findByIdAndDelete(_id)
    return res.status(201).json({ message: "Car deleted successfully", car: deletedCar})
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
        
    }
}

export const findCarByName = async (req,res) => {
    try {
        const name = req.body.name
        const parsedName = name.trim().toLowerCase()
        const carExist = await Car.findOne({name: parsedName })
        if(!carExist){
            return res.status(404).json({ message: "Car not found", error })
        }
        return res.status(200).json(carExist)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
        
    }
}
export const findCarById = async (req,res) => {
    try {
        const _id = req.params.id
        const carExist = await Car.findOne({ _id })
        if(!carExist){
            return res.status(404).json({ message: "Car not found", error })
        }
        return res.status(200).json(carExist)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
        
    }
}