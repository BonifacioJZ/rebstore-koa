import { model, Document, Schema } from 'mongoose';
import Type  from '../products/type'

export interface IService extends Document {
  name: String,
  display_name: String,
  description: String,
  type: string
}

const serviceSchema = new Schema({
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
  type: {
    required: true,
    type: Schema.Types.ObjectId,
    ref:'Type'
  }

})

export default model<IService>("Service",serviceSchema)