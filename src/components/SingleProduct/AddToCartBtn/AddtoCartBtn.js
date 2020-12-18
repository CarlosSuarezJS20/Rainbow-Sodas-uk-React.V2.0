import React, { useState } from 'react';
import classes from './AddToCartBtn.css';

const addToCartBtn = (props) => {
	const [btnText, setBtnText] = useState('Add to Cart');

	const changeText = () => {
		setBtnText('Cheers!!');
		setTimeout(() => {
			setBtnText('add to cart');
		}, 1000);
	};

	const onClicked = () => {
		props.clicked();
		changeText();
	};

	return (
		<div className={classes.CartBtnHolder}>
			<button className={classes.AddToCartBtn} onClick={onClicked}>
				{btnText}
			</button>
		</div>
	);
};

export default addToCartBtn;
