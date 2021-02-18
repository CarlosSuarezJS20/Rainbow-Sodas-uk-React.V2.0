import React, { useContext, useEffect } from 'react';
import classes from './CartSideDrawer.css';
import CartSideDrawerFooter from './CartSideDrawerFooter/CartSideDrawerFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import SingleItemCartDrawer from '../CartSideDrawer/SingleItemCartDrawer/SingleItemCartDrawer';

// cart align price

import { CartContext } from '../context/cart-context';

const cartSideDrawer = ({ openSideCart, drawerShowToFalse }) => {
	const cartContext = useContext(CartContext);

	useEffect(() => {
		console.log(' CartSideDrawer mounted');
	});

	let drawerAttachedClasses = [classes.CartDrawer];

	if (openSideCart) {
		drawerAttachedClasses = [classes.CartDrawer, classes.Open];
	}

	return (
		<div className={drawerAttachedClasses.join(' ')}>
			<div className={classes.CartInner}>
				<button
					type={'button'}
					className={classes.CartDrawerClose}
					onClick={drawerShowToFalse}
				>
					<FontAwesomeIcon icon={faWindowClose} />
				</button>
				<div className={classes.CartDrawerTitle}>CART</div>
			</div>
			<section className={classes.CartItemsList}>
				{cartContext.cart.length === 0 ? (
					<p>Cart is Empty</p>
				) : (
					cartContext.cart.map((prod) => (
						<SingleItemCartDrawer
							key={prod.productId}
							productId={prod.productId}
							productName={prod.productName}
							productPrice={prod.productPrice}
							qty={prod.productQty}
						/>
					))
				)}
			</section>
			{cartContext.cart.length > 0 && (
				<CartSideDrawerFooter
					total={cartContext.cart
						.map((prod) => prod.productPrice * prod.productQty)
						.reduce((p, c) => p + c)}
					clicked={cartContext.showCheckOutCard}
				/>
			)}
		</div>
	);
};

export default cartSideDrawer;
