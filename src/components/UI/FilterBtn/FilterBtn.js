import React from 'react';
import classes from './FilterBtn.css';

const filterBtn = (props) => {
	let btnClass = classes.FilterBtn;

	if (props.isSelected) {
		btnClass = classes.Active;
	}

	return (
		<button
			className={btnClass}
			type={props.type}
			value={props.name}
			onClick={props.clicked}
		>
			{props.name}
		</button>
	);
};

export default filterBtn;
