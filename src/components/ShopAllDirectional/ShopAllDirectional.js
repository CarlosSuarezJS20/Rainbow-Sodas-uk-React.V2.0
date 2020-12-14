import React from 'react';

import classes from './ShopAllDirectional.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const shopAllDirectional = (props) => (
	<div className={classes.Collections}>
		<a href={'#products-filter'}>
			shop all
			<span>
				<FontAwesomeIcon icon={faArrowRight} />
			</span>
		</a>
	</div>
);

export default shopAllDirectional;
