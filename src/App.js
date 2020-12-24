import React from 'react';

import FilterSection from './components/FiltersSection/FiltersSection';
import ProductList from './components/ProductList/ProductList';
import ProductsContextProvider from './components/context/products-context';
// import CartContextProvider from './components/context/cart-context';

import Layout from './components/Layout/Layout';
import Modal from './components/UI/Modal/Modal';

const App = (props) => {
	return (
		<Layout>
			<ProductsContextProvider>
				<Modal />
				<FilterSection />
				<ProductList />
			</ProductsContextProvider>
		</Layout>
	);
};

export default App;
