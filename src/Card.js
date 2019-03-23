import React from 'react';

const Card = (props) => {
	const { name, email, id } = props.robot;
	return (
		<div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	)
}

export default Card;