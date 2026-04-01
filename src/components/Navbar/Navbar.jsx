import { Link } from "react-router";

function Navbar() {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/characters">Characters</Link>
		</nav>
	);
}

export default Navbar;
