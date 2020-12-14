import React from 'react';
import classes from './FilterBtn.css';

const filterBtn = (props) => {
	return (
		<button
			className={classes.FilterBtn}
			type={props.type}
			value={props.name}
			onClick={props.clicked}
		>
			{props.name}
		</button>
	);
};

export default filterBtn;
