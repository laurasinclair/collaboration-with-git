import React, { useState } from "react";

function Counter() {
	// const count = 0;
	const [count, setCount] = useState(0);

	const handleClick = {
		decrease: () => setCount((prevCount) => prevCount - 1),
	};

	return (
		<div className="Counter">
			<h2>Counter</h2>

			<p>You clicked {count} times</p>

			<button onClick={handleClick.decrease}> - </button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				{" "}
				+{" "}
			</button>
		</div>
	);
}

export default Counter;
