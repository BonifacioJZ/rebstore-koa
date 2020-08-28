import Router from 'koa-router';
import {user,showUser} from '../../controller/private/user.controller'


const router = new Router()

router.get('/api/admin/user',user)
  .get('/api/admin/user/:id', showUser)
  .put('/api/admin/user/:id')
  .delete('/api/admin/user/:id')
      

export default router;