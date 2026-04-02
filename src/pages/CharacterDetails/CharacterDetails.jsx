import { useEffect, useState } from "react";
import { useParams } from "react-router";

// import characters from "../../assets/data/TabCharacters";

function CharacterDetails() {
	const { pouletId } = useParams();
	const [detailsCharact, setDetailsCharact] = useState(null);

	useEffect(() => {
		fetch(
			`https://miadil.github.io/HarryPotterApi/api/json/id/${pouletId}.json`,
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setDetailsCharact(data[0]));
	}, [pouletId]);

	if (!detailsCharact) {
		return <p>Chargement...</p>;
	}

	return (
		<div>
			<img src={detailsCharact.image} alt={detailsCharact.name} />
			<p>{detailsCharact.name}</p>
			<p>{detailsCharact.house}</p>
			<p>{detailsCharact.actor}</p>
		</div>
	);
}

export default CharacterDetails;
