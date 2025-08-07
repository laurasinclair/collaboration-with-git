import React, { useState } from "react";

function App() {
	const [theme, setTheme] = useState("theme_light");
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return <Spinner />;
	} 
	else {
		return (
				<div className={"App " + theme}>
					Hello there
				</div>
		);
	}
}

export default App;
