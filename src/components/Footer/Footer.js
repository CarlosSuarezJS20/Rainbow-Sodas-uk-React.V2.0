import React from 'react';
import classes from './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const footer = (props) => (
	<footer className={classes.Footer}>
		<ul className={classes.FooterLinks}>
			<li>
				<Link
					to="main"
					smooth={true}
					spy={true}
					duration={0}
					className={classes.FooterLink}
				>
					home
				</Link>
			</li>
			<li>
				<Link
					to="about"
					smooth={true}
					spy={true}
					duration={0}
					className={classes.FooterLink}
				>
					about
				</Link>
			</li>
			<li>
				<Link
					to="products"
					smooth={true}
					spy={true}
					duration={0}
					offset={-250}
					className={classes.FooterLink}
				>
					products
				</Link>
			</li>
		</ul>
		<ul className={classes.FooterIcons}>
			<li>
				<a
					href="https://www.facebook.com/"
					rel="noopener noreferrer"
					target="_blank"
					className={classes.FooterIcon}
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</li>
			<li>
				<a
					href="https://www.twitter.com"
					rel="noopener noreferrer"
					target="_blank"
					className={classes.FooterIcon}
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</li>
			<li>
				<a
					href="https://instagram.com"
					rel="noopener noreferrer"
					target="_blank"
					className={classes.FooterIcon}
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</li>
		</ul>
		<p className={classes.Copyright}>
			copyright &copy; carlos suarez. all rights reserved
		</p>
	</footer>
);

export default footer;
