import { Context, Next } from 'koa';
import Service from '../../../models/services/service'
import Type from '../../../models/products/type'


export const Create = async(ctx: Context, next: Next) => {
  const { service } = ctx.request.body
  
  if (!service) {
    ctx.status = 400
    ctx.body = { error: "No se enviaron los datos" }
    return next()
  }
  try {
    const newService = await Service.create({
      name: service.name,
      description: service.description,
      display_name: service.display_name,
      type:service.typeId
    })
    await newService.save()
    const typeById = await Type.findById(service.typeId) 
    typeById?.services.push(newService)
    await typeById?.save()

    ctx.status = 200
    ctx.body = {typeById}
    return next()

  } catch (error) {
    ctx.status = 400
    ctx.body = {error}
    return next()
  }
}

export const Index = async(ctx: Context, next: Next) => {
  try {
    const services = await Service.find()
    ctx.status = 200
    ctx.body = {services}
    return next()
  } catch (error) {
    ctx.status = 400
    ctx.body = {error}
    return next()
  }
}
export const Show = async (ctx: Context, next: Next) => {
  const { id } = ctx.params 
  try {
    const service = await Service.findById(id)
    ctx.status = 200
    ctx.body = {service}
    return next()
  } catch (error) {
    ctx.status = 400
    ctx.body = {error}
    return next()
  }
}
export const Delete = async (ctx: Context, next: Next) => {
  const { id } = ctx.params
  try {
    await Service.findByIdAndDelete({ _id: id })
    ctx.status = 200
    ctx.body = {}
    return next()
  } catch (error) {
    ctx.status = 400
    ctx.body = {error}
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
    const service = await Service.findByIdAndUpdate({ _id: id }, update, { new: true })
    ctx.status = 200
    ctx.body = {service}
    return next()
    
  } catch (error) {
    ctx.status = 400
    ctx.body = {error}
    return next()
  }
}