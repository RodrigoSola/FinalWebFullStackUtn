import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { isGoodPassword } from "../utils/passwordValidator.js";

const rolesEnum = ['admin','merchant','customer' ]

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    minlength: 6,
    maxlength: 30,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 30,
    validate: {
      validator: function (value) {
        return isGoodPassword(value);
      },
      message:
        "The password must contain at least one capital letter, one lowercase letter and one number, and must have between 6 and 12 characters ",
    },
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
     validate:  {
      validator: function (status) {
          return rolesEnum.includes(status)
      },
      message: props => `${props.value} it's not a valid status` 
      
  },
   required: true,
   enum: rolesEnum
  },
 
});
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
 
  next();
});

export default model("users", userSchema);
