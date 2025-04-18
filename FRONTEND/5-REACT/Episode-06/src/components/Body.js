import RestauruntCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import {useState, useEffect} from 'react';
import Shimmer  from "./shimmer";



const Body=()=>{
  //Local state variable superpowerful variable-> 
  const [listofRestaurants,setListOfRestaurant]= useState(reslist);
  const [searchtext,setSearchtext]= useState("");
  // whenever state variable update, react triggers a reconciliations cycle(re-render the component)
  
  //let listofRestaurants=[];
   let listofRestaurantsJS=[
      
 
        
      
    ];




    // useEffect(()=>{
    // fetchData();
    // },[]);

    // const fetchData= async ()=>{
    // const data=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627");
    // const json= await data.json();
    // console.log(json)
    // };
   
   // Conditional Rendering--->

// if(listofRestaurants.length===0){
//   return <Shimmer></Shimmer>;
// }

      return  listofRestaurants.length ===0 ? <Shimmer></Shimmer> : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" placeholder="Search" className="search-box" value={searchtext} onChange={(e)=>{
                  setSearchtext(e.target.value)
                }}>
                </input>
                <button onClick={()=>{
                  // Filter the resturant Cards and update the UI
                  console.log(searchtext)

                const filterRes =listofRestaurants.filter((res)=>res.data.name.includes(searchtext));

               setListOfRestaurant(filterRes)
                }}>search</button>

              </div>
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