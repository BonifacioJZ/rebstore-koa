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

export const updateUser = async (ctx: Context) => {
  const { id } = ctx.params
  const update = ctx.request.body.update
  if (!update) {
    ctx.status = 400
    return ctx.body = { error: `no se enviaron los datos` }
  }
  try {
    const userUpdate = await User.findByIdAndUpdate({ _id:id }, update, { new: true })
    ctx.status = 200
    return ctx.body = {userUpdate}
  } catch (error) {
    ctx.status = 400
    return ctx.body = {error};
  }
}
export const deleteUser = async (ctx: Context) => {
  const { id } = ctx.params
  try {
    await User.findByIdAndDelete({ _id: id })
    ctx.status = 201
    return ctx.body = { status: "eliminado" };
  } catch (error) {
    ctx.status = 400;
    return ctx.body = { error };
  }
}
