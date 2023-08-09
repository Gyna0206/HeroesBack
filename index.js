const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const heroRoutes= require ('./routers/hero')
const app = express()
const port = 3005
app.set('port',port)
app.use(express.json())
app.use('/api/hero', heroRoutes)
app.use(cors());
app.get('/',(req,res) =>{
    res.send('hola Mundo')
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to db'))
.catch((err)=>console.error(err))
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
