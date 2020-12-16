import React, { useContext, useState } from 'react';
import classes from './CartSideDrawer.css';
import CartSideDrawerFooter from './CartSideDrawerFooter/CartSideDrawerFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../context/products-context';

const cartSideDrawer = (props) => {
	const productsContext = useContext(ProductContext);

	let drawerAttachedClasses = [classes.CartDrawer];

	if (props.open) {
		drawerAttachedClasses = [classes.CartDrawer, classes.Open];
	}

	return (
		<div className={drawerAttachedClasses.join(' ')}>
			<div className={classes.CartInner}>
				<button
					type={'button'}
					className={classes.CartDrawerClose}
					onClick={props.drawerShowToFalse}
				>
					<FontAwesomeIcon icon={faWindowClose} />
				</button>
				<div className={classes.CartDrawerTitle}>CART</div>
			</div>
			<section className={classes.CartItemsList}>{'nothing'}</section>
			<CartSideDrawerFooter />
		</div>
	);
};

export default cartSideDrawer;
