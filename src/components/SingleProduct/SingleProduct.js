import React, { useContext } from 'react';
import classes from './SingleProduct.css';
import AddToCartBtn from './AddToCartBtn/AddtoCartBtn';
import { ProductContext } from '../context/products-context';

const singleProduct = (props) => {
	const productsContext = useContext(ProductContext);

	const addToCart = (id) => {
		productsContext.inCartHandler(id);
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
					addToCart(props.productId);
				}}
			/>
		</article>
	);
};

export default singleProduct;
