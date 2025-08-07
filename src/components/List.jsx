function List() {
	const students = ["Bob", "Bill", "Bob"];

	return (
		<div className="list">
			<h2>Student List</h2>

			{students.map((name, index) => {
				return <p key={`${name}_${index}`}> {name} </p>;
			})}
		</div>
	);
}

export default List;
