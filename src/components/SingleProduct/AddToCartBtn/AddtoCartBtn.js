import React from 'react';
import classes from './AddToCartBtn.css';

const addToCartBtn = (props) => {
	return (
		<div className={classes.CartBtnHolder}>
			<button className={classes.AddToCartBtn} onClick={props.clicked}>
				add to cart
			</button>
		</div>
	);
};

export default addToCartBtn;
