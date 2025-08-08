import { NavLink, useLoaderData } from 'react-router-dom';

const Movie = () => {
  const movie = useLoaderData();
  console.log(movie)

  if (!movie || movie.Response === "False") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-red-500">Movie not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8 animate-fadeIn">
      {/* Poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full md:w-1/3 rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
      />

      {/* Details */}
      <div className="flex flex-col justify-between space-y-4 md:w-2/3">
        <h1 className="text-4xl font-extrabold text-gray-900">{movie.Title} <span className="text-lg font-normal text-gray-500">({movie.Year})</span></h1>
        <p className="text-gray-700 italic leading-relaxed">"{movie.Plot}"</p>

        <div className="grid grid-cols-2 gap-4 text-gray-800 font-medium">
          <div>
            <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
            <p><span className="font-semibold">Director:</span> {movie.Director}</p>
            <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
          </div>
          <div>
            <p><span className="font-semibold">IMDB Rating:</span> {movie.imdbRating} ⭐</p>
            <p><span className="font-semibold">Awards:</span> {movie.Awards}</p>
            <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
           
          </div>
        </div>
        <NavLink to={`/movie/${movie.imdbID}`}>
           <button className='bg-amber-500 w-10px h-10px border-1x black' >Watch Now</button>


        </NavLink>
        
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition-colors duration-300 text-center"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
};

export default Movie;
