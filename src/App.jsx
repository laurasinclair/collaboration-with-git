import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Info, { InfoBox } from "./components/Info";

function App() {
	const themes = {
		light: "theme_light",
		dark: "theme_dark",
	};

	const [currentTheme, setCurrentTheme] = useState("light");
	const [isLoading] = useState(false);

	const toggleTheme = () => {
		setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	const [isVisible, setIsVisible] = useState(false);

	return isLoading ? (
		<Spinner />
	) : (
		<>
			<NavBar />
			
			<div className={"App " + themes[currentTheme]}>
				<Info isVisible={[isVisible, setIsVisible]} />

				{isVisible && <InfoBox></InfoBox>}
				<p>Hello there</p>
				<button onClick={toggleTheme}>
					{currentTheme === "light" ? "Dark" : "Light"} theme
				</button>
			</div>
		</>

	);
}

export default App;
