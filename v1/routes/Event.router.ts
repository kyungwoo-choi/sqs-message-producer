import {Router} from 'express'

import {home, land, itemPageView, pageView, cart, purchase, search, wishlist} from "../controllers/Event.controller"

const router = Router()

router.post('/home', home)
router.post('/item_page_view', itemPageView)
router.post('/land', land)
router.post('/page_view', pageView)
router.post('/cart', cart)
router.post('/purchase', purchase)
router.post('/wishlist', wishlist)
router.post('/search', search)

export default router
