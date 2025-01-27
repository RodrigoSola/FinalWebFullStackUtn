import { model, Schema } from 'mongoose';
const statusEnum = ['available','unavailable','discontinued' ]

const carsSchema = new Schema({
    name: {
        type: String,
        required:[ true,"Car name is required"],
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: [ true,"Price is required"],
        min: 1
    },
    profit: {
        type: Number,
        default: 1.21,
        min: 0.1
    },
    stock: {
        type: Number,
        required: true
        
    },
    description: {
        type: String,
        required: [ true,"Description is required"],
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    status:{
        type: String,
        validate:  {
            validator: function (status) {
                return statusEnum.includes(status)
            },
            message: props => `${props.value} it's not a valid status` 
            
        },
        required: true,
        enum: statusEnum
    },
   brand:{
    type: Schema.Types.ObjectId,
    ref: "brands",
    required: true
   },
   highlighted: {
    type: Boolean,
    default: false
   },
   createDate:{
    type: Date,
    default: Date.now
   }
})

carsSchema.methods.decreaseStock = function (amount){
    if(this.stock > amount){
        throw new Error("Not enough stock ")
    }
    this.stock -= amount;
    return this.save()
}

carsSchema.virtual("PriceWuthProfut").get(function () {
    return this.price *  this.profit
})

carsSchema.set('toJson', { virtuals: true })
carsSchema.set('toObject', { virtuals: true })



export default model('cars', carsSchema);