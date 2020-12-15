import React from 'react';
import classes from './ErrorMessage.css';

const errorMessage = (props) => (
	<div className={classes.MessageHolder}>
		<p>{props.errorMessage}</p>
	</div>
);

export default errorMessage;
