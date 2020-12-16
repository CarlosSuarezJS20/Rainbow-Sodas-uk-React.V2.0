import React from 'react';
import classes from './NavbarCartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const navbarItemSideCart = (props) => {
	return (
		<div className={classes.CartIconHolder}>
			<FontAwesomeIcon
				icon={faShoppingCart}
				className={classes.CartToggle}
				onClick={props.clicked}
			/>
			<span className={classes.CartItemsCounter}>0</span>
		</div>
	);
};

export default navbarItemSideCart;
