import { Context, Next } from 'koa'
import {encrypt} from '../lib/lib'

export const Create = async (ctx: Context, next: Next) => {
  const { login } = ctx.request.body
  if (!login) {
    ctx.status = 400
    ctx.body = { error: "los datos no fueron enviados" }
    return next()
  }
  try {
    login.password = await encrypt(login.password)
    console.log(login.password)
    
  } catch (error) {
    ctx.status = 400
    ctx.body = { error }
    return next()
  }
}