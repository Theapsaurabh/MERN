import seriesData from "../api/seriesData.json";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
       return (
        <li key={curElem.id}>
          <div>
            <img
              src={curElem.img_url}
              alt="qot.jpg"
              width="40%"
              height="40%"
            />
          </div>
          <h1>Name:{curElem.name}</h1>
          <h2>Rating:{curElem.rating}</h2>
          <h3>Rating:{curElem.rating}</h3>
          <p>Summary:{curElem.description}</p>
          <p>Genre :{curElem.genre}</p>
          <p>Cast:{curElem.cast}</p>
          <a href={curElem.watch_url}>
            <button>Watch Now</button>
          </a>
        </li>
       )
        
      })}
    </ul>
  );
};

export default NetflixSeries;
