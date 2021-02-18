import React, { useState, useEffect } from 'react';

export const ProductContext = React.createContext({
	productsList: [],
	error: null,
	filtersbtns: [],
	filters: [],
	fetchFilters: () => {},
	clearFilters: () => {},
});

const ProductsContextProvider = (props) => {
	const [updatedProductList, setUpdatedProductList] = useState();
	const [errorText, setError] = useState(null);
	const [updatedFiltersBtns, setUpdatedfiltersBtns] = useState([
		{
			name: 'berries',
			elementConfig: { type: 'button', value: 'berries' },
			selected: false,
		},
		{
			name: 'citrusy',
			elementConfig: { type: 'button', value: 'citrusy' },
			selected: false,
		},
		{
			name: 'classic',
			elementConfig: { type: 'button', value: 'classic' },
			selected: false,
		},
		{
			name: 'fancy',
			elementConfig: { type: 'button', value: 'fancy' },
			selected: false,
		},
		{
			name: 'floral',
			elementConfig: { type: 'button', value: 'floral' },
			selected: false,
		},
		{
			name: 'jazzy',
			elementConfig: { type: 'button', value: 'jazzy' },
			selected: false,
		},
		{
			name: 'juicy',
			elementConfig: { type: 'button', value: 'juicy' },
			selected: false,
		},
		{
			name: 'sour',
			elementConfig: { type: 'button', value: 'sour' },
			selected: false,
		},
	]);
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
						productPrice: responseData[key].price,
						productTypes: responseData[key].type,
						productQty: responseData[key].qty,
					});
				}
				if (filters.length !== 0) {
					// removing duplicate
					const updatedFilters = filters.filter((filter, index) => {
						return filters.indexOf(filter) === index;
					});
					// filters propucts
					const filteredProducts = productsData.filter((prod) => {
						return prod.productTypes.some((prodType) =>
							updatedFilters.includes(prodType)
						);
					});
					setUpdatedProductList(filteredProducts);
				} else {
					setUpdatedProductList(productsData);
				}
				// setting up filters btns properties after fetching data from server
			})
			.catch((error) => {
				setError('Something Went Wrong!  :(');
			});
	}, [filters]);

	// ==== FILTER ACTIONS ====
	// ==== ============== ====

	const filtersHandler = (filterValue) => {
		if (filters.find((filter) => filter === filterValue)) {
			setFilters(filters.filter((filter) => filter !== filterValue));
			selectBtnToFalse(filterValue);
		} else {
			setFilters((initialFilter) => [...initialFilter, filterValue]);
			selectBtnToTrue(filterValue);
		}
	};

	const selectBtnToTrue = (name) => {
		const btnsCopy = [...updatedFiltersBtns];
		const btnSelectedIndex = btnsCopy.findIndex((btn) => btn.name === name);
		btnsCopy[btnSelectedIndex].selected = true;
		setUpdatedfiltersBtns(btnsCopy);
	};

	const selectBtnToFalse = (name) => {
		const btnsCopy = [...updatedFiltersBtns];
		const btnSelectedIndex = btnsCopy.findIndex((btn) => btn.name === name);
		btnsCopy[btnSelectedIndex].selected = false;
		setUpdatedfiltersBtns(btnsCopy);
	};

	const clearFiltersHandler = () => {
		const btnsCopy = [...updatedFiltersBtns];
		btnsCopy.forEach((btn) => (btn.selected = false));
		setUpdatedfiltersBtns(btnsCopy);
		const filtersCopy = [];
		setFilters(filtersCopy);
	};

	return (
		<ProductContext.Provider
			value={{
				productsList: updatedProductList,
				error: errorText,
				filters: filters,
				filtersbtns: updatedFiltersBtns,
				fetchFilters: filtersHandler,
				clearFilters: clearFiltersHandler,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductsContextProvider;
