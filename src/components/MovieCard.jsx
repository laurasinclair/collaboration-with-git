import { useState } from "react";
import styles from "./MovieCard.module.sass" // "module" has to be in the css (sass here) file name

function MovieCard({ title, director, IMDBRating, hasOscars }) {
	const [isVisible, setIsVisible] = useState(false);
	
	const toggleInfo = () => {
		setIsVisible(!isVisible);
	}

	return (
		<div className={styles.movieCard}>
			{title && <h3>{title}</h3>}

			<button onClick={toggleInfo}>
				{isVisible ? "Less info" : "More info"}
			</button>

			{isVisible && (
				// <></> (fragment) helps us encapsulate content in a single tag, but it won't be rendered as a HTML element. Only the content inside will be.
				<>
					{director && <p>Director: {director}</p>}
					{IMDBRating && <p>Rating: {IMDBRating}</p>}
					{hasOscars && <p>Yes it has oscars! 🎉</p>}
				</>
			)}
		</div>
	);
}

export default MovieCard;
