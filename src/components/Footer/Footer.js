import React from 'react';
import classes from './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const footer = (props) => (
	<footer className={classes.Footer}>
		<ul className={classes.FooterLinks}>
			<li>
				<a href="" className={classes.FooterLink}>
					home
				</a>
			</li>
			<li>
				<a href="" className={classes.FooterLink}>
					about
				</a>
			</li>
			<li>
				<a href="#products-filter" className={classes.FooterLink}>
					products
				</a>
			</li>
		</ul>
		<ul className={classes.FooterIcons}>
			<li>
				<a
					href="https://www.facebook.com/"
					target="_blank"
					className={classes.FooterIcon}
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</li>
			<li>
				<a
					href="https://www.twitter.com"
					target="_blank"
					className={classes.FooterIcon}
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</li>
			<li>
				<a
					href="https://instagram.com"
					target="_blank"
					className={classes.FooterIcon}
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</li>
		</ul>
		<p className={classes.Copyright}>
			copyright &copy; carlos suarez <span></span>. all rights reserved
			{/* need to add the date here */}
		</p>
	</footer>
);

export default footer;
