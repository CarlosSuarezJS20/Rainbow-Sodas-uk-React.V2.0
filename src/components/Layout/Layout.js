import React, { useState } from 'react';

import Navbar from '../NavBar/NavBar';
import Herobanner from '../HeroBanner/HeroBanner';
import ShopAllDirectional from '../ShopAllDirectional/ShopAllDirectional';
import AboutUs from '../AboutUs/AboutUs';
import CartSideDrawer from '../CartSideDrawer/CartSideDrawer';
import Footer from '../Footer/Footer';

// import context to access in cartDrawer
import ProductContextProvider from '../context/products-context';

const layout = (props) => {
	const [showDrawer, setShowDrawer] = useState(false);

	const showDrawerToTrueHandler = () => {
		setShowDrawer(true);
	};

	const showDrawerToFalseHandler = () => {
		setShowDrawer(false);
	};

	return (
		<React.Fragment>
			<ProductContextProvider>
				<Navbar drawerShowToTrue={showDrawerToTrueHandler} />
				<CartSideDrawer
					open={showDrawer}
					drawerShowToFalse={showDrawerToFalseHandler}
				/>
			</ProductContextProvider>
			<Herobanner />
			<ShopAllDirectional />
			<AboutUs />
			{props.children}
			<Footer />
		</React.Fragment>
	);
};

export default layout;
