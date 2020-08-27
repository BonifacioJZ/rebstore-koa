import app from './app'
import './db/connection'

app.listen(3000, () => {
  console.log(`Koa.ts Started`)
})