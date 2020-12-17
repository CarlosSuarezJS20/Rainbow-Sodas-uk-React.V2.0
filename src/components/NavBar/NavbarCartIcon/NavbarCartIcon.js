import React, { useContext } from 'react';
import classes from './NavbarCartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../../context/cart-context';

const navbarItemSideCart = (props) => {
	const cartContext = useContext(CartContext);

	return (
		<div className={classes.CartIconHolder}>
			<FontAwesomeIcon
				icon={faShoppingCart}
				className={classes.CartToggle}
				onClick={props.clicked}
			/>
			<span className={classes.CartItemsCounter}>
				{cartContext.cart.length === 0
					? 0
					: cartContext.cart
							.map((prod) => prod.productQty)
							.reduce((p, c) => p + c)}
			</span>
		</div>
	);
};

export default navbarItemSideCart;
