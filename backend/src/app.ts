import Koa from 'koa';

import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import Kjwt from 'koa-jwt'
import Kcors from '@koa/cors'

import authRouter from './routers/user.routers'

const app = new Koa();



  //Middlewares
app.use(json())
app.use(bodyParser())
app.use(logger())
app.use(Kcors())

 //routers
  //public
app.use(authRouter.routes()).use(authRouter.allowedMethods())
  //private


export default app;
  