import { model, Schema, Document } from 'mongoose'
import { IService } from '../services/service';

export interface IType extends Document{
  name: string;
  display_name: string;
  description: string;
  services: IService[];
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
  },
  services: [
    {type:Schema.Types.ObjectId,ref:'Service'}
  ]
})

export default model<IType>('Type', typeSchema);