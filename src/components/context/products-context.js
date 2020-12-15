import React, { useState, useEffect } from 'react';

export const ProductContext = React.createContext({
	productsList: [],
	error: null,
	filtersbtns: [],
	filterProducts: () => {},
});

const ProductsContextProvider = (props) => {
	const [updatedProductList, setUpdatedProductList] = useState();
	const [errorText, setError] = useState(null);
	const [UpdatedfiltersBtns, setFilteresBtns] = useState([]);

	useEffect(() => {
		fetch('https://rainbow-soda-uk-default-rtdb.firebaseio.com/products.json')
			.then((response) => response.json())
			.then((responseData) => {
				const productsData = [];
				for (const key in responseData) {
					productsData.push({
						id: key,
						productName: responseData[key].productName,
						productImg: responseData[key].productImgURL,
						productType: responseData[key].type,
					});
				}
				setUpdatedProductList(productsData);
				setFilteresBtns([
					{
						name: 'berries',
						elementConfig: { type: 'button', value: 'berries' },
					},
					{
						name: 'citrusy',
						elementConfig: { type: 'button', value: 'citrusy' },
					},
					{
						name: 'classic',
						elementConfig: { type: 'button', value: 'classic' },
					},
					{
						name: 'fancy',
						elementConfig: { type: 'button', value: 'fancy' },
					},
					{
						name: 'floral',
						elementConfig: { type: 'button', value: 'floral' },
					},
					{
						name: 'jazzy',
						elementConfig: { type: 'button', value: 'jazzy' },
					},
					{
						name: 'juicy',
						elementConfig: { type: 'button', value: 'juicy' },
					},
					{ name: 'sour', elementConfig: { type: 'button', value: 'sour' } },
				]);
			})
			.catch((error) => {
				setError('Something Went Wrong!  :(');
			});
	}, []);

	const filterProductsHandler = (filtersArray) => {
		const filters = filtersArray.filter((filter, index) => {
			return filtersArray.indexOf(filter) === index;
		});

		const filteredItems = updatedProductList.filter((prod) => {
			return prod.productType.some((prodType) => filters.includes(prodType));
		});

		console.log(filteredItems);
	};

	return (
		<ProductContext.Provider
			value={{
				productsList: updatedProductList,
				error: errorText,
				filtersbtns: UpdatedfiltersBtns,
				filterProducts: filterProductsHandler,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductsContextProvider;
