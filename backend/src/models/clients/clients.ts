import { model, Schema, Document } from 'mongoose'



const clientSchema = new Schema({
  name: {
    required: true,
    type: String,
    minlength: 4,
    maxlength:1000
  }
  
})