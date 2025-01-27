import Brand from '../models/brandModel.js'

export const createBrand = async (req,res) => {
    try {
        const name = req.body.name
        const brandExist = await Brand.findOne({ name })
        if(brandExist) {
            return res.status(400).json({ message: 'Brand already exists' })
        }
        const newBrand = new Brand({ name })
        const createdBrand = await newBrand.save()
        return res.status(201).json(createdBrand)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" ,  error })
    }
}

export const getBrand = async (req,res) => {
    try {
        
        const brands = await Brand.find()
        if(brands.lenght === 0) {
            return res.status(404).json({ message: 'Brand not found' })
        }
        return res.status(200).json(brands)

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
        
    }
}


export const deleteBrand = async (req,res) => {
    try {
        const _id = req.params.id
        const brand = await Brand.findOne({ _id })
        if(!brand){
            return res.status(404).json({ message: 'Brand not found' })
        }
        const deletedBrand = await Brand.findByIdAndDelete(_id)
        return res.status(200).json({ message: 'Brand deleted successfully', brand: deletedBrand })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
        
    }
}

export const updateBrand = async (req,res) => {
    try {
        const _id = req.params.id 
    const BrandExist = await Brand.findOne({ _id }) 
    if(!BrandExist){
        return res.status(404).json({ message: "Brand not found", error })
    }
    const updatedBrand = await Brand.updateOne({ _id }, req.body)
    return res.status(201).json({ message: "Brand updated successfully", brand: updatedBrand})
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
        
    }
}