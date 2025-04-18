import { CDN_URL } from "../utils/constants";


const RestauruntCard= (props)=>{
    const{resData}= props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        deliveryTime,

    }= resData?.data

    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"
            }}>
                <img className="item-1"
                 alt="food" src={CDN_URL + cloudinaryImageId}/>
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.data.deliveryTime} minutes</h4>
            <h4>{resData.data.totalRatings} stars</h4>



        </div>
    )
};
export default RestauruntCard;