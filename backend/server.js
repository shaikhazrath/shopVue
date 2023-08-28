import express from 'express'
const app = express()
import { config } from 'dotenv'
import mongoose from 'mongoose'
import colors from 'colors'
import cors from 'cors'
import cloudinary from 'cloudinary'
import bodyParser from 'body-parser'

import User from './router/authRouter.js'
import ShopDashboard from './router/shopDashboardRoute.js'
import Shop from './router/customerRoute.js'


config({path:'.env'})
cloudinary.config({
    cloud_name: 'dzhbqwghe',
    api_key: '978513459175788',
    api_secret: 'cjNR0oqXGZjdx0C-rQmd-0mozaU'
});



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: (origin, callback) => {
      if (!origin || origin === 'http://localhost:3000' || origin.endsWith('.localhost:3000')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }));
  


app.use('/auth',User)
app.use('/dashboard',ShopDashboard)
app.use('/',Shop)
// app.get('/', (req, res) => {
//     const hostParts = req.hostname.split('.');
//   const subdomain = hostParts[0];
//   res.send(`Hello from ${subdomain} subdomain!`);
// });



mongoose.connect(process.env.DB).then(()=>{
    console.log(colors.cyan('Mongodb connected'))
    app.listen(process.env.PORT,()=>{
        console.log(colors.rainbow(`server is running on http://127.0.0.1:${process.env.PORT}`))
    })
})
