import { Context,Next } from 'koa'

import Type from '../../../models/products/type'

export const create = async (ctx: Context,next:Next) => {
  const type = ctx.request.body.type
  if (!type) {
    ctx.status = 400
    return ctx.body = { error: "no se enciaron los datos" }
  
  }
  try {
    const newType = await new Type(type).save()
    ctx.status = 201
    ctx.body = { newType }
    return next()
  } catch (error) {
    ctx.status = 400
    return ctx.body = {error}
  }
}
export const index = async (ctx: Context, next: Next) => {
  try {
    const types = await Type.find()
    ctx.status = 200
    ctx.body = { types }
    return next()
  } catch (error) {
    ctx.status = 400
    ctx.body = {error}
  }
}

export const show = async (ctx: Context, next: Next) => {
  const { id } = ctx.params
  try {
    const types = await Type.findById(id)
    ctx.status = 200
    ctx.body = { types }
    return next()
  } catch (error) {
    ctx.status = 400
    ctx.body = { error }
    return next()
  }
}

export const Delete = async (ctx: Context, next: Next) => {
  const { id } = ctx.params
  try {
    await Type.findByIdAndDelete({ _id: id })
    ctx.status = 200
    ctx.body = {}
    return next()
    
  } catch (error) {
    ctx.status = 400
    ctx.body = { error }
    return next()
  }
}
export const Update = async (ctx: Context, next: Next) => {
  const { id } = ctx.params
  const { update } = ctx.request.body
  if (!update) {
    ctx.status = 400
    ctx.body = { "error": "No se enviaron los datos" }
    return next()
  }
  try {
    const type = await Type.findByIdAndUpdate({ _id: id }, update, { new: true })
    ctx.status = 200
    ctx.body = { type }
    return next()
    
  } catch (error) {
    ctx.status = 400
    ctx.body = { error }
    return next()
  }
}

