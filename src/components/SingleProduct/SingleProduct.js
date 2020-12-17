import React, { useContext } from 'react';
import classes from './SingleProduct.css';
import AddToCartBtn from './AddToCartBtn/AddtoCartBtn';
import { CartContext } from '../context/cart-context';

const singleProduct = (props) => {
	const cartContext = useContext(CartContext);

	const addToCart = (id, productName, price, qty) => {
		if (cartContext.cart.find((prod) => prod.productId === id)) {
			cartContext.updateMoreQty(id);
		} else {
			const productInCart = {
				productId: id,
				productName: productName,
				productPrice: price,
				productQty: qty,
			};
			cartContext.updateCart(productInCart);
		}
	};

	return (
		<article className={classes.SingleProduct}>
			<div className={classes.ProductImgContainer}>
				<img src={props.productImg} alt="" />
			</div>
			<div className={classes.ProductTitle}>
				<h2>{props.productName}</h2>
			</div>
			<AddToCartBtn
				clicked={() => {
					addToCart(
						props.productId,
						props.productName,
						props.productPrice,
						props.productQty
					);
				}}
			/>
		</article>
	);
};

export default singleProduct;
