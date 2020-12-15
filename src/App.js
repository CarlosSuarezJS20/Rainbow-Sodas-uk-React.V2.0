import React from 'react';

import Navbar from './components/NavBar/NavBar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import ShopAllDirectional from './components/ShopAllDirectional/ShopAllDirectional';
import AboutUs from './components/AboutUs/AboutUs';
import FilterSection from './components/FiltersSection/FiltersSection';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import ProductsContextProvider from './components/context/products-context';

const App = (props) => {
	return (
		<React.Fragment>
			<Navbar />
			<HeroBanner />
			<ShopAllDirectional />
			<AboutUs />
			<ProductsContextProvider>
				<FilterSection />
				<ProductList />
			</ProductsContextProvider>
			<Footer />
		</React.Fragment>
	);
};

export default App;
