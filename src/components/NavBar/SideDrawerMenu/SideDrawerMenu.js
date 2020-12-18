import React from 'react';
import classes from './SideDrawerMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const sideDrawerMenu = (props) => {
	let drawerAttachedClasses = [classes.SideMenu];

	if (props.open) {
		drawerAttachedClasses = [classes.SideMenu, classes.Open];
	}

	return (
		<div className={drawerAttachedClasses.join(' ')}>
			<button
				type="button"
				className={classes.DrawerMenuClose}
				onClick={props.drawerShowToFalse}
			>
				<FontAwesomeIcon icon={faWindowClose} />
			</button>
			<div className={classes.DrawerTitle}>SODAS UK</div>
			<ul className={classes.NavLinks}>
				<li>
					<Link
						to="shopAll"
						smooth={true}
						spy={true}
						duration={0}
						offset={-50}
						className={classes.NavLink}
					>
						shop all
					</Link>
				</li>
				<li>
					<Link
						to="products"
						smooth={true}
						spy={true}
						duration={0}
						offset={-250}
						className={classes.NavLink}
					>
						products
					</Link>
				</li>
				<li>
					<Link
						to="about"
						smooth={true}
						spy={true}
						duration={0}
						className={classes.NavLink}
					>
						about us
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default sideDrawerMenu;
