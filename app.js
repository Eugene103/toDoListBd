import  express  from 'express'
import logger from 'morgan'
import cors from 'cors'
import tasksRouter from './routes/api/tasks.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/tasks', tasksRouter)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app

