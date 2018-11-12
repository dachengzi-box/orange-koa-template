import * as compose from 'koa-compose'
import * as Router from 'koa-router'
import * as Ctrl from '../controller/user'

const router = new Router({
    prefix: '/users',
});

router.get('/', Ctrl.get);
router.post('/', Ctrl.post);
router.put('/', Ctrl.put);

const routes = router.routes()

export default () => compose([
    routes
])