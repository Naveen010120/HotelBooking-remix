import { assets } from "public/assets"
import { useState } from "react"
import { Title } from "~/components/Title"

export function AddRoom(){
    const [images,setImages]=useState({
        1:null,
        2:null,
        3:null,
        4:null,
    })
    const [inputs,setInputs]=useState({
        roomType:'',
        pricePerNight:0,
        amenities:{
            'Free Wifi':false,
            'Free Breakfast':false,
            'Room Service':false,
            'Mountain View':false,
            'Pool Access':false,
        }
    })
    return(
        <form>
           
           <Title align="left" font="mono" title="Add Room" subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil vitae veniam, in est quaerat quo ipsum accusamus facilis voluptas ipsa, ullam debitis." />
           {/* images */}
           <p className="text-gray-800  mt-10">Images</p>
           <div className="grid grid-cols-2 md:flex gap-4 my-2 flex-wrap">
            {Object.keys(images).map((key)=>(
                <label htmlFor={`roomImage${key}`} key={key}>
                    <img className="max-h-20 shadow-lg rounded-lg cursor-pointer opacity-80" src={images[key]?URL.createObjectURL(images[key]):assets.uploadArea} alt="" />
                    <input type="file" accept="image/*" id={`roomImage${key}`}  hidden onChange={e=>setImages({...images,[key]:e.target.files[0]})}/>
                </label>
            ))}
           </div>
           <div className="w-full  flex  max-sm:flex-col sm:gap-4 mt-4">
                <div className="flex-1 max-w-48">
                    <p className="text-gray-800 mt-4">Room Type</p>
                    <select className="border opacity-70 border-gray-300 mt-1 rounded p-2" onChange={e=>setInputs({...inputs,roomType:e.target.value})} value={inputs.roomType}>
                        <option value="">Select Room type</option>
                        <option value="Single Bed">Single Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Luxury Room">Luxury Room</option>
                        <option value="Family Suite">Family Suite</option>
                    </select>
                </div>
           </div>
           <div>
            <p className="mt-4 text-gray-800">
                Price <span className="text-sm">/night</span>
            </p>
            <input type="number" placeholder="0" className="border border-gray-300 mt-1 rounded p-2 w-24" onChange={e=>setInputs({...inputs,pricePerNight:Number(e.target.value)})} />
           </div>
           <p className="text-gray-800 mt-4">Amenities</p>
           <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
                {
                    Object.keys(inputs.amenities).map((amenity,index)=>(
                        <div key={index}>
                                <input type="checkbox" className="cursor-pointer" id={`amenities${index+1}`}  checked={inputs.amenities[amenity]} onChange={e=>setInputs({...inputs,amenities:{...inputs.amenities,[amenity]:!inputs.amenities[amenity]}})}/>
                                <label htmlFor={`amenities${index+1}`} className="cursor-pointer"> {amenity}</label>
                        </div>
                    ))
                }
           </div>
           <button className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer">
                    Add Room
           </button>
        </form>
    )
}