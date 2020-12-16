import React from 'react';
import classes from './SingleItemCartDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const singleItemCartDrawer = (props) => {
	return (
		<article className={classes.CartItem}>
			<div className={classes.SideCartProductItem}>
				<h3>{props.productName}</h3>
				<button className={classes.TrashIcon}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</div>
			<div className={classes.SideCartProductPrice}>
				<p>{props.productPrice}</p>
				<div>
					<button className={classes.QtyBtn} disabled>
						-
					</button>
					<span>{props.qty}</span>
					<button className={classes.QtyBtn}>+</button>
				</div>
			</div>
		</article>
	);
};

export default singleItemCartDrawer;
