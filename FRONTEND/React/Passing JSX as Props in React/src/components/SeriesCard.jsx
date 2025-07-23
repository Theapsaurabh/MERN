

 export const SeriesCard = (props) => {
  return (
        <li key={props.curElem.id}>
          <div>
            <img
              src={props.curElem.img_url}
              alt="qot.jpg"
              width="40%"
              height="40%"
            />
          </div>
          <h1>Name:{props.curElem.name}</h1>
          <h2>Rating:{props.curElem.rating}</h2>
          <h3>Rating:{props.curElem.rating}</h3>
          <p>Summary:{props.curElem.description}</p>
          <p>Genre :{props.curElem.genre}</p>
          <p>Cast:{props.curElem.cast}</p>
          <a href={props.curElem.watch_url}>
            <button>Watch Now</button>
          </a>
        </li>
       )
}

export default SeriesCard
