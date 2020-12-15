import React from 'react';
import classes from './SingleProduct.css';
import AddToCartBtn from './AddToCartBtn/AddtoCartBtn';

const singleProduct = (props) => {
	return (
		<article className={classes.SingleProduct}>
			<div className={classes.ProductImgContainer}>
				<img src={props.productImg} alt="" />
			</div>
			<div className={classes.ProductTitle}>
				<h2>{props.productName}</h2>
			</div>
			<AddToCartBtn productId={props.productId} />
		</article>
	);
};

export default singleProduct;
