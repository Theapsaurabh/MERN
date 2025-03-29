import RestauruntCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import {useState} from 'react';



const Body=()=>{
  //Local state variable superpowerful variable-> 
  const [listofRestaurants,setListOfRestaurant]= useState(reslist);
  
  
  //let listofRestaurants=[];
   let listofRestaurantsJS=[
      
 
        
      
    ];


    return  (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
                // filter logic here--->
                
               let filterdList= listofRestaurants.filter(
                  (res)=>res.data.totalRatings>400
                );
                setListOfRestaurant(filterdList);

              }}>
                Top Rated Restaurant</button>
              
            </div>
            <div className="res-container"> 
              {  /*  RestaruntCard */}
              {
                listofRestaurants.map((restaurant)=><RestauruntCard key={restaurant.data.id} resData={restaurant}/>)
              }

              
            </div>
        </div>
    )

}
export default Body;