import React, { useContext } from 'react';
import classes from './SingleItemCartDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/cart-context';

const singleItemCartDrawer = (props) => {
	const cartContext = useContext(CartContext);

	const moreQtyHandler = (id) => {
		cartContext.updateMoreQty(id);
	};

	const lessQtyHandler = (id) => {
		cartContext.updateLessQty(id);
	};

	const deleteProductHandler = (id) => {
		cartContext.deleteProduct(id);
	};

	return (
		<article className={classes.CartItem}>
			<div className={classes.SideCartProductItem}>
				<h3>{props.productName}</h3>
				<button
					className={classes.TrashIcon}
					onClick={() => {
						deleteProductHandler(props.productId);
					}}
				>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</div>
			<div className={classes.SideCartProductPrice}>
				<p> £ {props.productPrice}</p>
				<div>
					<button
						className={classes.QtyBtn}
						disabled={props.qty > 1 ? false : true}
						onClick={() => {
							lessQtyHandler(props.productId);
						}}
					>
						-
					</button>
					<span>{props.qty}</span>
					<button
						className={classes.QtyBtn}
						onClick={() => {
							moreQtyHandler(props.productId);
						}}
					>
						+
					</button>
				</div>
			</div>
		</article>
	);
};

export default singleItemCartDrawer;
