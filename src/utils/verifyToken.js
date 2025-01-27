import jwt from 'jsonwebtoken'
import { SECRET } from '../../config.js'

export function verifyToken(token) {

    try {
        const decoded = jwt.verify(token, SECRET)
        return decoded
    } catch (error) {
        throw new Error("invalid token", token, error)
    }
    
}