import { Router } from './router.js'

const router = new Router()

router.add('/', '/pages/page1.html')
router.add('/page2', '/pages/page2.html')
router.add('/page3', '/pages/page3.html')


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()