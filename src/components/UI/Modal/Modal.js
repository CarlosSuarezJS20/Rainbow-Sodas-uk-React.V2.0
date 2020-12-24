import React, { useContext } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import { CartContext } from '../../context/cart-context';

const Modal = () => {
	const cartContext = useContext(CartContext);

	let modalClasses = [classes.Modal];

	if (cartContext.showCheckOut) {
		modalClasses = [classes.Modal, classes.Show];
		console.log(modalClasses.join(' '));
	}

	return (
		<React.Fragment>
			<Backdrop checkoutShow={cartContext.showCheckOut} />
			<div className={modalClasses.join(' ')}>
				<h2>Your Pack</h2>
				<div className={classes.Summary}>
					<ul>
						{cartContext.cart.map((prod) => (
							<li key={prod.productId}>
								<strong>{`${prod.productQty} x `}</strong>
								{prod.productName}
							</li>
						))}
					</ul>
					<h3>
						Total Price: £
						<span>
							{cartContext.cart.length > 0 &&
								cartContext.cart
									.map((prod) => prod.productPrice * prod.productQty)
									.reduce((p, c) => p + c)}
						</span>
					</h3>
					<button onClick={cartContext.hideCheckOutCard}>Close</button>
					<p>Thansk for visiting my project! </p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Modal;
