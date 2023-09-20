import 'reflect-metadata'
import 'dotenv/config'

import express, {Request, Response, NextFunction} from 'express'

import v1 from './v1'
import Prometheus from "./utils/Prometheus"

const app: express.Application = express()

// application level middleware
app.use(express.json())

const prometheus = new Prometheus({withRPSMetric: true}) // create prometheus instance
app.get('/metrics', prometheus.metricsRouter) // register middleware
app.use(prometheus.rpsMiddleware()) // register middleware

app.use('/', async (request: Request, response: Response, next: NextFunction) => {
  next()
})

app.use('/v1', v1)

app.listen(+(process.env.PORT || 3000), '0.0.0.0', async () => {
  console.log('server started')
  prometheus.processMessageHandler() // register message handler between pm2 processes
})
