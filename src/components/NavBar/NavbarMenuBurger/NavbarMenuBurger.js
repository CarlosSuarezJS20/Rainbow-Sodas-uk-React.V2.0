import React from 'react';
import classes from './NavbarMenuBurger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navbarItemBurgerMenu = (props) => {
	return <FontAwesomeIcon icon={faBars} className={classes.NavToggle} />;
};

export default navbarItemBurgerMenu;
