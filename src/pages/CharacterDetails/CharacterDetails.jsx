import { useParams } from "react-router";

import characters from "../../assets/data/TabCharacters";
import { useState } from "react";

function CharacterDetails() {
	const { pouletId } = useParams();
	const [detailsCharact, setDetailsCharact] = useState(
		characters.find((character) => character.id === parseInt(pouletId, 10)),
	);

	return (
		<div>
			<img src={detailsCharact.imgSrc} alt={detailsCharact.name} />
			<p>{detailsCharact.name}</p>
			<p>{detailsCharact.house}</p>
			<p>{detailsCharact.role}</p>
		</div>
	);
}

export default CharacterDetails;
