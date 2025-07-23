import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
       
       return <SeriesCard key={curElem.id} curElem= {curElem}/>
      })}
    </ul>
  );
};

export default NetflixSeries;
