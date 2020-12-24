import React, { useContext } from 'react';
import classes from './NavbarCartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../../context/cart-context';

const navbarItemSideCart = (props) => {
	const cartContext = useContext(CartContext);
	const qty =
		cartContext.cart.length === 0
			? 0
			: cartContext.cart.map((prod) => prod.productQty).reduce((p, c) => p + c);

	let itemCounterClass = [classes.CartItemsCounter];

	if (qty > 0) {
		itemCounterClass = [classes.CartItemsCounter, classes.Active];
	}

	return (
		<div className={classes.CartIconHolder}>
			<FontAwesomeIcon
				icon={faShoppingCart}
				className={classes.CartToggle}
				onClick={props.clicked}
			></FontAwesomeIcon>
			<span className={itemCounterClass.join(' ')}>{qty}</span>
		</div>
	);
};

export default navbarItemSideCart;
