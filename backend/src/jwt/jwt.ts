import jwt from 'koa-jwt';
import { IUser } from '../models/user';
import JWT from 'jsonwebtoken'
import config from '../config/config.env'
export const createToken = (user: IUser)=>{
  return JWT.sign({ id: user._id, email: user.email, username: user.username, name: `${user.name} ${user.last_name}` },
    config.JWT_SECRET, {
      algorithm: "HS512",
      expiresIn:8400
  })
}