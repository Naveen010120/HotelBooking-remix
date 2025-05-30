import { assets, facilityIcons, roomCommonData, roomsDummyData } from "public/assets";
import { useEffect, useState } from "react";
import { StarRating } from "~/components/StarRating";

interface props{
    id?:string;
}
interface roomDetails{
    _id: string;
    hotel: {
        _id: string;
        name: string;
        address: string;
        contact: string;
        owner: {
            _id: string;
            username: string;
            email: string;
            image: string;
            role: string;
            createdAt: string;
            updatedAt: string;
            __v: number;
            recentSearchedCities: string[];
        };
        city: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    roomType: string;
    pricePerNight: number;
    amenities: string[];
    images: string[];
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export function RoomDetail({id}:props){
    const [room,setRoom]=useState<roomDetails>(null);
    const [mainImage,setMainImage]=useState(null);
    useEffect(()=>{
        
     const room=roomsDummyData.find(room=>room._id==id);
     room && setRoom(room)
     room && setMainImage(room.images[0])
    },[])
    if(room==null){
        return <h1 className="flex justify-center text-4xl font-bold text-gray-400 h-screen items-center">Loading...</h1>
    }
    console.log(room)
    return(
        <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
         <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-serif">{room.hotel.name} <span className="font-mono text-sm">{room.roomType} </span></h1>
            <p className="text-xs font-mono py-1.5 px-3 text-white bg-orange-500 rounded-full">20% OFF</p>
         </div>

         <div className="flex items-center gap-1 mt-2">
            <StarRating />
            <p className="ml-2">200+ reviews</p>
         </div>

         <div className="flex items-center gap-1 text-gray-500  mt-2">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
         </div>

         <div className="flex flex-col lg:flex-row mt-6 gap-6">
            <div className="lg:w-1/2 w-full">
                <img src={mainImage} alt="room-image" className="w-full rounded-xl shadow-lg object-cover"/>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full p-3">
                {room?.images.length>1 && room.images.map((image,index)=>(
                    <button onClick={()=>setMainImage(image)} key={index} className={`w-full rounded-xl shadow-md object-cover  ${mainImage==image && 'border-4 border-orange-500 rounded-xl'}`}>
                            <img src={image} alt="room-image"  className="rounded-xl    "/>
                    </button>
                ))}
            </div>
         </div>
         <div className="flex flex-col md:flex-row md:justify-between mt-10">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-serif captialize">Experience Luxury Like Never before</h1>
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                    {room.amenities.map((item,index)=>(
                        <div key={index} className="flex flex-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                            <img src={facilityIcons[item]} alt="item"  className="w-5 h-5"/>
                            <p className="text-xs">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-2xl font-medium text-gray-500">${room.pricePerNight} /night</p>
         </div>

         <div className="flex flex-col items-center">
            <form  className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
                <div className="flex flex-col mr-2 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-2  text-gray-500">
                    <label htmlFor="checkinDate" className="font-medium">Check-In</label>
                    <input type="date" id="checkinDate" placeholder="Check_In" className="w-full rounded border border-gray-300  px-3 py-2 mt-1.5 outline-none" required/>
                </div>
                    <div className="md:h-14 md:mt-12 m-4 w-0.5 bg-gray-200"></div>

                <div className="flex flex-col mr-2 max-md:mt-8 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-2  text-gray-500">
                    <label htmlFor="checkoutDate" className="font-medium">Check-Out</label>
                    <input type="date" id="checkoutDate" placeholder="Check_Out" className="w-full rounded border border-gray-300  px-3 py-2 mt-1.5 outline-none" required/>
                </div>
                    <div className="md:h-14 md:mt-12 m-4 w-0.5 bg-gray-200"></div>
                <div className="flex flex-col  flex-wrap md:flex-col items-start md:items-center gap-4 md:gap-2  text-gray-500">
                    <label htmlFor="guests" className="font-medium">Guests</label>
                    <input type="number" id="guests" placeholder="0" className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" required/>
                </div>
                    <div className="md:h-14 md:mt-12 m-4 w-0.5 bg-gray-200"></div>
                    
                <button type="submit" className="bg-primary mt-10   hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-sm cursor-pointer px-3 m-3">
                   Check Availability
                </button>
            </form>
         </div>
         <div className="mt-20 space-y-4">
           {
            roomCommonData.map((spec,index)=>(
                <div key={index} className="flex items-start gap-2 ">
                    <img src={spec.icon} alt="icons" className="w-6.5" />
                    <div>
                        <p className="text-base font-medium">{spec.title}</p>
                        <p className="text-gray-500">{spec.description}</p>
                    </div>
                </div>
            ))
           }
         </div>
         <div className="max-w-3xl  border-y border-gray-300 my-14 text-justify py-5 text-gray-500">
           <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequuntur! dolor sit amet consectetur adipisicing elit. Nemo, beatae odit voluptates harum veritatis corrupti natus, iure numquam dolore quisquam dignissimos?</p>
         </div>

         <div className="flex flex-col items-center justify-center h-20  gap-4">
            <div className="flex gap-4 ">
                <img src={room.hotel.owner.image} alt="host" className="h-14 w-14 md:h-18 md:w-18 rounded-full" />
                <div>
                    <p>Hosted by {room.hotel.name}</p>
                    <div className="flex items-center mt-1">

                    <StarRating />
                    <p className="ml-2">200+ reviews</p>
                    </div>
                </div>
                <button className="px-6 py-2.5 mt-1 rounded text-white bg-primary hover:bg-primary-dul transition-all cursor-pointer ">Contact Now</button>
            </div>
         </div>
        </div>
    )
}