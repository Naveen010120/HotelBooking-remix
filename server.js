import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express';
import {clerkWebhook} from './app/utils/clerkWebHook'
const app=express();

app.use(cors());
app.use(clerkMiddleware())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// api for listen clerk web hook
app.use('/api/clerk',clerkWebhook)

const PORT=process.env.PORT_NUM||''
app.get('/',(req,res)=>{
    res.send('api is working ')
})
app.listen(PORT,()=>{
    console.log('server running on then port '+PORT)
})
