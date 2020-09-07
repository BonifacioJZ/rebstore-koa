import Koa from 'koa';

import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import Kjwt from 'koa-jwt'
import Kcors from '@koa/cors'

import authRouter from './routers/auth.routes'
import userRouter from './routers/private/user.routes'
import typeRouter from './routers/private/products/type.routes'
import serviceRouter from './routers/private/services/service.routes'
import config from './config/config.env'

const app = new Koa();



  //Middlewares
app.use(json())
app.use(bodyParser())
app.use(logger())
app.use(Kcors())
  //routers
  //public
app.use(authRouter.routes())
app.use(authRouter.allowedMethods())
  //private
app.use(Kjwt({ secret: config.JWT_SECRET }))
app.use(typeRouter.routes()).use(typeRouter.allowedMethods())
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(serviceRouter.routes()).use(serviceRouter.allowedMethods())
//default




export default app;
