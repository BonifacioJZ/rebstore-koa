import  {Context} from 'koa';
import User from '../models/user'
import {createToken} from '../jwt/jwt'

export const signUp = async (ctx:Context) => {
  const user = ctx.request.body.user
  if (!user) {
    ctx.status = 400
    return ctx.body = { error:"no se enciaron los datos"}
  }
  try {
    const newUser = await new User(user);
    ctx.status = 201
    return ctx.body = {user:newUser}
  } catch (error) {
    ctx.status = 400
    return ctx.body = { error };
    }
}
  
export const signIn = async (ctx: Context) => {
  const login = ctx.request.body.login
  if (!login) {
    ctx.status = 400
    return ctx.body ={ error:"datos no enviados"}
  }

  const user = await User.findOne({ username: login.username })
  if (!user) {
    ctx.status = 400
    return ctx.body = {error:"el usuario no existe"}
  }
  const result = await user.comparePassword(login.password)
  if (!result) {
    ctx.status = 400
    return ctx.body = {error:"la constraseña es incorrecta"}
  }
  ctx.status = 201
  return ctx.body = {token:createToken(user)}
}
  