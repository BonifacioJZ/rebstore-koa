import Koa from 'koa';

import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import Kjwt from 'koa-jwt'

import authRouter from './routers/auth.routes'
import config from './config/config.env'

const app = new Koa();



  //Middlewares
app.use(json())
app.use(bodyParser())
app.use(logger())

  //routers
  //public
app.use(authRouter.routes())
app.use(authRouter.allowedMethods())
  //private
app.use(Kjwt({secret:config.JWT_SECRET}))

//default
app.use(async (ctx) => {
  ctx.status= 400
  ctx.body = "ruta no existente";
});



export default app;
