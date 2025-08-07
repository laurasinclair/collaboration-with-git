import React, { useState } from "react";
import { useEffect } from "react";

function CounterInput() {
    // Count
    const [count, setCount] = useState(0);

    // Greeting
    const [user, setUser] = useState({
			firstName: "",
			lastName: "",
			id: undefined,
		});

    const [greeting, setGreeting] = useState("you")

    const handleInput = (e) => setUser({
        ...user,
        firstName: e.target.value
    })

    useEffect(() => {
        user.firstName.length ? setGreeting(user.firstName) : setGreeting("you")
    }, [user.firstName])

	return (
		<div className="Counter">
			<h2>Counter</h2>

			<input type="text" onBlur={handleInput} />

			<p>
				Hello, {greeting}! You clicked {count} times
			</p>

			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				{" "}
				-{" "}
			</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				{" "}
				+{" "}
			</button>
		</div>
	);
}

export default CounterInput;
