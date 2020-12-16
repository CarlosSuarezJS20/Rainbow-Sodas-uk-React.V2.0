import React from 'react';
import classes from './CartSideDrawerFooter.css';

const cartSideDrawerFooter = () => {
	return (
		<div className={classes.CartFooter}>
			<div className={classes.TotalDisplaySideCart}>
				<h3>total</h3>
				<span>0</span>
			</div>
			<button className={classes.CheckoutDrawer}>checkout</button>
		</div>
	);
};

export default cartSideDrawerFooter;
