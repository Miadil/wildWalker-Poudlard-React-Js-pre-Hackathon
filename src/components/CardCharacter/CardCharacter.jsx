function CardCharacter({ pouletImgSrc, pouletName }) {
	return (
		<div>
			<img src={pouletImgSrc} alt={pouletName} />
			<p>{pouletName}</p>
		</div>
	);
}

export default CardCharacter;

// function CardCharacter(props) {
// 	console.log(props);
// 	return (
// 		<div>
// 			<img src={props.pouletImgSrc} alt={props.pouletName} />
// 			<p>{props.pouletName}</p>
// 		</div>
// 	);
// }

// export default CardCharacter;
