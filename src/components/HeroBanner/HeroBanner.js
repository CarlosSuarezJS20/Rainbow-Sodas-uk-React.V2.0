import React from 'react';
import classes from './HeroBanner.css';

const heroBanner = (props) => (
	<div className={classes.MainBanner}>
		<div>
			<h1 className={classes.BannerText}>
				Welcome to <br />
				<strong>
					the rainbow
					<br />
					uk <br /> sodas company
				</strong>
			</h1>
		</div>
	</div>
);

export default heroBanner;
