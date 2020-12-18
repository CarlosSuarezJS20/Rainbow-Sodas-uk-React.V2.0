import React, { useState } from 'react';

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

	const showDrawerToTrueHandler = () => {
		setShowCartDrawer(true);
	};

	const showDrawerToFalseHandler = () => {
		setShowCartDrawer(false);
	};

	const showSideMenuToTrueHandler = () => {
		setShowSideMenu(true);
	};

	const showSideMenuToFalseHandler = () => {
		setShowSideMenu(false);
	};

	return (
		<React.Fragment>
			<CartContextProvider>
				<Navbar
					drawerShowToTrue={showDrawerToTrueHandler}
					menuDrawerShowToTrue={showSideMenuToTrueHandler}
				/>
				<SideDrawerMenu
					open={showSideMenu}
					drawerShowToFalse={showSideMenuToFalseHandler}
				/>
				<CartSideDrawer
					open={showCartDrawer}
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
