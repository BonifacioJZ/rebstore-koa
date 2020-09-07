import Router from 'koa-router'
import { Create } from '../../../controller/private/service/service.controller';

const router = new Router()

router.post('/admin/services/service', Create)




export default router
