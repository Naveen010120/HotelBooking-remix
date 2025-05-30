import { assets } from "public/assets";
interface props{
    rating?:number
}
export function StarRating({rating=4}:props){
    return(
        <>
         {Array(5).fill('').map((_, index) => (
                              <img key={index} src={rating>index?assets.starIconFilled:assets.starIconOutlined} alt="star-icon" className="w-4.5 h-4.5"/>
                            ))}
        </>
    )
}