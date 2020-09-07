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