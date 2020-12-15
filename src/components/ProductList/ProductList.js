import React, { useContext } from 'react';
import classes from './ProductList.css';
import SingleProduct from '../SingleProduct/SingleProduct';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import { ProductContext } from '../context/products-context';

const productList = (props) => {
	const productsContext = useContext(ProductContext);

	let list = null;

	if (productsContext.productsList) {
		list = productsContext.productsList.map((prod) => (
			<SingleProduct
				key={prod.id}
				productId={prod.id}
				productName={prod.productName}
				productImg={prod.productImg}
			/>
		));
	}

	return (
		<section className={classes.ProductsHolder}>
			{productsContext.error ? (
				<ErrorMessage errorMessage={productsContext.error} />
			) : (
				list
			)}
		</section>
	);
};

export default productList;
