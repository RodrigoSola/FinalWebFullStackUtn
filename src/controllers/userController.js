import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {SECRET} from '../config.js'


export const createUser = async (req,res) => {
    try {
        const newUser = new User(req.body)
        const { email } = newUser
        const userExist = await User.findOne({ email })
        
        if(userExist){
            return res.status(400).json({ message: 'User already exists' })
        } 
            const savedUser = await newUser.save()
            const {  password, ...rest } = savedUser.toObject()
            return res.status(201).json({ message: "User created",user: rest })
        
    } catch (error) {
       return res.status(500).json({ message: "Internal server error", error })
        
    }
}

export const getUser = async (req, res) =>{
    try {
        const user = await User.find()
        if(user.length === 0){
            return res.status(404).json({ message: "User not found", error })
        } 
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
    }
}

export const deleteUser = async (req,res) => {
    try {
        const _id = req.params.id
        const deletedUser = await User.findOne({ _id })
        if(!deletedUser){
            return res.status(404).json({ message: "User not found", error })
        }
        await User.findByIdAndDelete(_id)
        return res.status(200).json({ message: "User deleted successfully", user: deletedUser })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
    }
}

export const updateUser = async (req,res) => {
    try {
        const _id = req.params.id
       const userExist = await User.findOne({ _id })
       if(!userExist){
        return res.status(404).json({ message: "User not found", error })
       }
       const updatedUser = await User.findByIdAndUpdate({ _id }, req.body, 
        { new: true 

        })
        return res.status(201).json(updatedUser)
    } catch (error) {

        console.error(error)
        return res.status(500).json({ message: "Internal server error", error })
    }
}


export const validate = async (req, res) => {
    try {
        if(!(req.body.email && req.body.password)){
            return res.status(400).json({ message: "There is a missing field" })
        }
        const userFound = await User.findOne({ email: req.body.email })
        
        if(!userFound){
            return res.status(401).json({ message: "User not found" })
        }


        const passwordMatch = bcrypt.compareSync(req.body.password, userFound.password);
        
       
        if(passwordMatch){
            const payload = {
                id: userFound._id,
                email: userFound.email
            }
            const token = jwt.sign(payload, SECRET, { expiresIn: '1h' })
            
            return res.status(200).json({ message: "User authenticated successfully", token })
        }else{
            return res.status(401).json({ message: "Invalid credentials" })
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
    }
}