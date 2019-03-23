import React from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
	const CardsArray = robots.map((user, i) => {
		return <Card key={i} robot={robots[i]} />
	});
	return (
		<div>
			{CardsArray}
		</div>
	);
}

export default CardList;