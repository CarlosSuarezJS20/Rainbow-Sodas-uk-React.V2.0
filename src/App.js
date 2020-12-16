import React from 'react';

import FilterSection from './components/FiltersSection/FiltersSection';
import ProductList from './components/ProductList/ProductList';
import ProductsContextProvider from './components/context/products-context';
import Layout from './components/Layout/Layout';

const App = (props) => {
	return (
		<Layout>
			<ProductsContextProvider>
				<FilterSection />
				<ProductList />
			</ProductsContextProvider>
		</Layout>
	);
};

export default App;
