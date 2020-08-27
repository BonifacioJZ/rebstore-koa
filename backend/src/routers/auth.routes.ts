import Router from 'koa-router'
import {signUp,signIn} from '../controller/auth.controller'

const router = new Router();

router
  .post('/api/signin',signIn)
  .post('/api/sigup',signUp );


export default router;