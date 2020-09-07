import Router from 'koa-router'

import { create, index, show, Delete, Update } from '../../../controller/private/products/types.controller';

const router = new Router()

router.post('/admin/products/type', create)
      .get('/admin/products/type', index)
      .get('/admin/products/type/:id', show)
      .delete('/admin/products/type/:id', Delete)
      .put('/admin/products/type/:id',Update)




export default router