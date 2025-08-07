import React, { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
	const themes = {
		light: "theme_light",
		dark: "theme_dark",
	};

	const [currentTheme, setCurrentTheme] = useState("light");
	const [isLoading, setIsLoading] = useState(false);

	const toggleTheme = () => {
		setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return isLoading ? (
		<Spinner />
	) : (
		<>
			<NavBar />
			<div className={"App " + themes[currentTheme]}>
				<p>Hello there</p>
				<button onClick={toggleTheme}>
					{currentTheme === "light" ? "Dark" : "Light"} theme
				</button>
			</div>
		</>
	);
}

export default App;
