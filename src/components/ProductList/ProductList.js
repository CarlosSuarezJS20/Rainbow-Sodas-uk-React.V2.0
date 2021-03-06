import React, { useContext } from 'react';
import classes from './ProductList.css';
import SingleProduct from '../SingleProduct/SingleProduct';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import { ProductContext } from '../context/products-context';

const productList = () => {
	const productsContext = useContext(ProductContext);

	let list = null;

	if (productsContext.productsList) {
		list = productsContext.productsList.map((prod) => (
			<SingleProduct
				key={prod.id}
				productId={prod.id}
				productName={prod.productName}
				productImg={prod.productImg}
				productPrice={prod.productPrice}
				productQty={prod.productQty}
			/>
		));
	}

	return (
		<section className={classes.ProductsHolder} id="products">
			{productsContext.error ? (
				<ErrorMessage errorMessage={productsContext.error} />
			) : (
				list
			)}
		</section>
	);
};

export default productList;
