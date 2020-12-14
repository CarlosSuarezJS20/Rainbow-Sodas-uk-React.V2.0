import React from 'react';
import classes from './AboutUs.css';

const aboutUs = (props) => (
	<section className={classes.SectionCenter}>
		<div className={classes.AboutUs}>
			<h1>
				WE THE PEOPLE BEHIND CRAFTED <br />
				SODAS IN <br />
				UK
			</h1>
			<p>
				In order for a more perfect beverage, establish variety, insure
				palatable tranquility, provide for the extraordinary taste, promote the
				general refreshment and secure the blessings of flavor to ourselves and
				our posterity do ordain and establish this soda company for the people
				of UK.
			</p>
		</div>
	</section>
);

export default aboutUs;
