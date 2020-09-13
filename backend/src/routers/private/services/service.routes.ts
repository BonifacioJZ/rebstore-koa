import Router from 'koa-router'
import { Create, Index, Show, Update, Delete } from '../../../controller/private/service/service.controller';

const router = new Router()

router.post('/admin/services/service', Create)
  .get('/admin/services/service', Index)
  .get('/admin/services/service/:id', Show)
  .put('/admin/services/service/:id', Update)
  .delete('/admin/services/service/:id',Delete)
  




export default router
