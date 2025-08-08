import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=5c749a37`);
        const data = await res.json();

        if (data.Response === "False") {
          setError("Movie not found");
          setMovieData(null);
        } else {
          setMovieData(data);
          setError(null);
        }
      } catch (err) {
        setError("Failed to fetch movie data");
        console.log(err)
        setMovieData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieID]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!movieData) return null;

  // Now render your movie details using movieData
  return (
    <div>
      <h1>{movieData.Title}</h1>
      <img src={movieData.Poster} alt={movieData.Title} />
      {/* rest of your movie details */}
    </div>
  );
};
