import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
	let showClasses = [classes.Backdrop];

	if (props.checkoutShow) {
		showClasses = [classes.Backdrop, classes.ShowBackdrop];
	}

	return <div className={showClasses.join(' ')}>{props.children}</div>;
};

export default Backdrop;
