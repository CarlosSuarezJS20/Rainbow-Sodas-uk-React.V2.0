import React, { useState, useCallback } from 'react';

import Navbar from '../NavBar/NavBar';
import Herobanner from '../HeroBanner/HeroBanner';
import ShopAllDirectional from '../ShopAllDirectional/ShopAllDirectional';
import AboutUs from '../AboutUs/AboutUs';
import CartSideDrawer from '../CartSideDrawer/CartSideDrawer';
import Footer from '../Footer/Footer';
import SideDrawerMenu from '../NavBar/SideDrawerMenu/SideDrawerMenu';
// import context to access in cartDrawer
import CartContextProvider from '../context/cart-context';

const layout = (props) => {
	const [showCartDrawer, setShowCartDrawer] = useState(false);
	const [showSideMenu, setShowSideMenu] = useState(false);

	const cartDrawerToggleHandler = useCallback(() => {
		setShowCartDrawer((prevState) => !prevState);
	}, []);

	const sideMenuTogglerHandler = useCallback(() => {
		setShowSideMenu((prevState) => !prevState);
	}, []);

	return (
		<React.Fragment>
			<CartContextProvider>
				<Navbar
					drawerShowToTrue={cartDrawerToggleHandler}
					menuDrawerShowToTrue={sideMenuTogglerHandler}
				/>
				<SideDrawerMenu
					open={showSideMenu}
					drawerShowToFalse={sideMenuTogglerHandler}
				/>
				<CartSideDrawer
					openSideCart={showCartDrawer}
					drawerShowToFalse={cartDrawerToggleHandler}
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
