import 'reflect-metadata'
import app from './app'
import { createConnection } from 'typeorm'


createConnection()
app.listen(3000, () => {
  console.log(`Koa.ts Started`)
})