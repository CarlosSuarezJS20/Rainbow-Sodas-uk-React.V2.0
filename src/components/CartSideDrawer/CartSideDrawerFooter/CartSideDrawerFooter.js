import React from 'react';
import classes from './CartSideDrawerFooter.css';

const cartSideDrawerFooter = (props) => (
	<div className={classes.CartFooter}>
		<div className={classes.TotalDisplaySideCart}>
			<h3 className={classes.TotalTitle}>total</h3>
			<span>£{props.total}</span>
		</div>
		<button className={classes.CheckoutDrawer}>checkout</button>
	</div>
);

export default cartSideDrawerFooter;
