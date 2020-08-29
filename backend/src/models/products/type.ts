import { model, Schema, Document } from 'mongoose'

export interface IType extends Document{
  name: string;
  display_name: string;
  description: string;
} 

const typeSchema = new Schema({
  name: {
    required: true,
    type: String,
    minlength: 4,
    maxlength:1000,
  },
  display_name: {
    required: true,
    type: String,
    minlength: 4,
    maxlength:10,
  },
  description: {
    type:String
  }
})

export default model<IType>('Type', typeSchema);