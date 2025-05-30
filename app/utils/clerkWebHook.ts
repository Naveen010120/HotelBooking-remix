import {prisma} from './prisma.server'
import { Webhook } from 'svix'
import 'dotenv/config'
const clerkWebhook=async(req,res)=>{
    try {
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
        //getting headers
        const headers={
            "svix-id":req.headers['svix-id'],
            "svix-signature":req.headers['svix-signature'],
            "svix-timestamp":req.headers['svix-timestamp'],
        }
        //verify headers
        await whook.verify(JSON.stringify(req.body),headers);
        // getting data from request body
        const {data,type}=req.body;
        const userData={
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username:data.first_name + " "+data.last_name,
            image:data.image_url,
        }
        // switch cases for different events
        switch (type) {
            case "user.created":{
                await prisma.user.create({data:{userData}})
                break;}
            case "user.updated":{
                await prisma.user.upsert({where:{
                    id:data.id
                },data:{
                    userData
                }})
                break;}
            case "user.deleted":{
                await  prisma.user.findFirst(data.id);
                break;
            }
            default:
                break;
        }
    } catch (error:any) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}
export {clerkWebhook}