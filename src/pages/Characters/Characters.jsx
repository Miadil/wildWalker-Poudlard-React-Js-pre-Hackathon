import { useEffect, useState } from "react";
import { Link } from "react-router";

// import characters from "../../assets/data/TabCharacters";
import CardCharacter from "../../components/CardCharacter/CardCharacter";

function Characters() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		console.log("Je suis dans le Use Effect.");
		fetch("https://miadil.github.io/HarryPotterApi/api/json/characters.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => setCharacters(data));
	}, []);

	return (
		<div>
			{console.log("Je suis dans le return.")}
			<h1>Poudlard</h1>
			<section>
				{characters.map((character) => (
					<Link to={`/characters/${character.id}`} key={character.id}>
						<CardCharacter
							pouletImgSrc={character.image}
							pouletName={character.name}
						/>
					</Link>
				))}
			</section>
		</div>
	);
}

export default Characters;
