import React, { useState } from 'react';

import Navbar from '../NavBar/NavBar';
import Herobanner from '../HeroBanner/HeroBanner';
import ShopAllDirectional from '../ShopAllDirectional/ShopAllDirectional';
import AboutUs from '../AboutUs/AboutUs';
import CartSideDrawer from '../CartSideDrawer/CartSideDrawer';
import Footer from '../Footer/Footer';
// import context to access in cartDrawer
import CartContextProvider from '../context/cart-context';

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
			<CartContextProvider>
				<Navbar drawerShowToTrue={showDrawerToTrueHandler} />
				<CartSideDrawer
					open={showDrawer}
					drawerShowToFalse={showDrawerToFalseHandler}
				/>
				<Herobanner />
				<ShopAllDirectional />
				<AboutUs />
				{props.children}
			</CartContextProvider>
			<Footer />
		</React.Fragment>
	);
};

export default layout;
