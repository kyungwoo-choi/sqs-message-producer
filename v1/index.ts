import 'reflect-metadata'
import {Router, Request, Response} from 'express'

import EventRouter from "./routes/Event.router"

const router: Router = Router()

// router.get('/', async(request: Request, response: Response) => response.send('OK'))

router.use('/event', EventRouter)
export default router
