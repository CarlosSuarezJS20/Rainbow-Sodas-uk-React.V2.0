import React, { useState, useEffect } from 'react';

export const ProductContext = React.createContext({
	productsList: [],
	error: null,
	filtersbtns: [],
	fetchFilters: () => {},
	filters: [],
});

const ProductsContextProvider = (props) => {
	const [updatedProductList, setUpdatedProductList] = useState();
	const [errorText, setError] = useState(null);
	const [updatedfiltersBtns, setFilteresBtns] = useState([]);
	const [filters, setFilters] = useState([]);

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
						productTypes: responseData[key].type,
					});
				}
				if (filters.length !== 0) {
					// removing duplicate
					const updatedFilters = filters.filter((filter, index) => {
						return filters.indexOf(filter) === index;
					});
					const filteredProducts = productsData.filter((prod) => {
						return prod.productTypes.some((prodType) =>
							updatedFilters.includes(prodType)
						);
					});
					setUpdatedProductList(filteredProducts);
				} else {
					setUpdatedProductList(productsData);
				}
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
	}, [filters]);

	const filtersHandler = (filterValue) => {
		if (filters.find((filter) => filter === filterValue)) {
			setFilters(filters.filter((filter) => filter !== filterValue));
		} else {
			setFilters((initialFilter) => [...initialFilter, filterValue]);
		}
	};

	return (
		<ProductContext.Provider
			value={{
				productsList: updatedProductList,
				error: errorText,
				filtersbtns: updatedfiltersBtns,
				fetchFilters: filtersHandler,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductsContextProvider;
