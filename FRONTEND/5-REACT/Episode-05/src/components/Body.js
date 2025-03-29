import RestauruntCard from "./RestaurantCard";
import reslist from "../utils/mockData";


const Body=()=>{
    return  (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{}}>
                Top Rated Restaurant</button>
              
            </div>
            <div className="res-container"> 
              {  /*  RestaruntCard */}
              {
                reslist.map((restaurant)=><RestauruntCard key={restaurant.data.id} resData={restaurant}/>)
              }

              
            </div>
        </div>
    )

}
export default Body;