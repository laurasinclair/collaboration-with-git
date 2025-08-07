import React, { useState } from "react";

function App() {
	const [theme, setTheme] = useState("theme_light");
	const [isLoading, setIsLoading] = useState(false);

	return (
		isLoading ? <Spinner /> : (
			<div className={"App " + theme}>
				<p>Hello there</p>
			</div>
		)
	);
}

export default App;
