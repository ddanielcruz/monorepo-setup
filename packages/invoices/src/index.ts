import cors from 'cors'
import express from 'express'

import { isEven } from '@monorepo/core'

const app = express()
app.use(cors())

app.get('/', (_request, response) => {
  const timestamp = Date.now()
  console.log(`Is ${timestamp} even? ${isEven(timestamp)}`)

  return response.status(204).send()
})

const { PORT = 3000 } = process.env
app.listen(PORT, () => console.log(`Invoices service is running on port ${PORT}`))
