import { model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt';
export interface IUser extends Document{
  name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  comparePassword: (password:String)=>Promise<boolean>
}

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  last_name: {
    type: String,
  },
  username: {
    required: true,
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 4,
    maxlength: 100,
  },
  email: {
    required: true,
    unique: true,
    type: String,
    lowercase: true,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    trim: true
  }

});

userSchema.pre<IUser>('save', async function (next){
  const user = this;
  if (!user.isModified('password')) return next()
  const salt = await bcrypt.genSalt(10);
  const has = await bcrypt.hash(user.password, salt)
  user.password = has;
  next();


})

userSchema.methods.comparePassword = async function (password:string):Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
  
}

export default model<IUser>('User', userSchema);