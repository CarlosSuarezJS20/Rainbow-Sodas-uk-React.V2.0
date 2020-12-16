import React from 'react';
import classes from './NavBar.css';
import NavbarMenuBurger from './NavbarMenuBurger/NavbarMenuBurger';
import NavbarCartIcon from './NavbarCartIcon/NavbarCartIcon';

const navBar = (props) => {
	return (
		<nav className={classes.Navbar}>
			<NavbarMenuBurger />
			<h1 className={classes.HeaderTitle}>RAINBOW SODAS UK</h1>
			<NavbarCartIcon clicked={props.drawerShowToTrue} />
		</nav>
	);
};

export default navBar;
