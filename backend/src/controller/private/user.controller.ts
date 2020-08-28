import { Context } from 'koa'
import {verifyToken} from '../../jwt/jwt'
import User  from '../../models/user'
export const user = async (ctx: Context) => {
  let token = ctx.request.headers["authorization"]
  token = token.split(" ")
  ctx.body = verifyToken(token[1])
}
export const showUser = async (ctx: Context) => {
  const { id } = ctx.params
  try {
    const user = await User.findById(id)
    ctx.status = 200
    return ctx.body = {
      user: {
        name: `${user?.name} ${user?.last_name}`,
        email: user?.email,
        username:user?.username
    }}
  } catch (error) {
    ctx.status = 400
    return ctx.body ={error}
  }
}