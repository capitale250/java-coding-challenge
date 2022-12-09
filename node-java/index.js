import express from 'express'
import cors from'cors'
import router from './src/routes/index.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use(router)

const port = process.env.PORT|| 8000;


if (process.env.NODE_ENV !== 'test') {
    app.listen(port, function() {
        console.log(`Example app listening on port ${port}!`)
      });}


export default app