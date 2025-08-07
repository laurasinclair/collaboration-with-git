import { useState } from "react";
import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";

function MoviesList() {
  const [movies, setMovies] = useState(moviesData);

	return (
		<div className="list">
			{movies.map((movie) => {
				return (
					<MovieCard
						title={movie.title}
						director={movie.director}
						IMDBRating={movie.IMDBRating}
						hasOscars={movie.hasOscars}
						key={movie._id}
					/>
				);
			})}
		</div>
	);
}

export default MoviesList;
