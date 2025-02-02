import { model, Schema } from 'mongoose';
const brandSchema = new Schema({
   name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    tolowercase: true
    }
})


export default model('brands', brandSchema);