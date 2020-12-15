import React from 'react';
import classes from './AddToCartBtn.css';

const addToCartBtn = (props) => {
	return (
		<div className={classes.CartBtnHolder}>
			<button className={classes.AddToCartBtn}>add to cart</button>
		</div>
	);
};

export default addToCartBtn;
