import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import mongoose from 'mongoose'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(json({ limit: '30mb', extended: true }))
app.use(urlencoded({ limit: '30mb', extended: true }))

app.use('/api/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
          .bold
      )
    )
  )
  .catch((error) => console.log(error.message.red.bold))
