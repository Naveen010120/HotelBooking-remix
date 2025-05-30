
import { json, LoaderFunction, useLoaderData } from "react-router"
import { RoomDetail } from "~/pages/RoomDetails";
export const loader:LoaderFunction=async({params})=>{

    const {id}=params;
    return json(id)
}
export default  function RoomsDetails(){
    const loaderData=useLoaderData();
    console.log(loaderData)
    return(
        <>
       
        <RoomDetail id={loaderData as string}/>
        </>
    )
}