import { Link } from "react-router";
import characters from "../../assets/data/TabCharacters";
import CardCharacter from "../../components/CardCharacter/CardCharacter";

function Characters() {
	return (
		<div>
			<h1>Poudlard</h1>
			<section>
				{characters.map((character) => (
					<Link to={`/characters/${character.id}`} key={character.id}>
						<CardCharacter
							pouletImgSrc={character.imgSrc}
							pouletName={character.name}
						/>
					</Link>
				))}
			</section>
		</div>
	);
}

export default Characters;
