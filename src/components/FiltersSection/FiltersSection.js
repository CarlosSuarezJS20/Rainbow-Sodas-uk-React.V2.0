import React, { useState } from 'react';
import classes from './FiltersSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import FilterBtn from '../UI/FilterBtn/FilterBtn';

const filterSection = () => {
	const [btnsDescriptions] = useState([
		{ name: 'berries', elementConfig: { type: 'button', value: 'berries' } },
		{ name: 'citrusy', elementConfig: { type: 'button', value: 'citrusy' } },
		{ name: 'classic', elementConfig: { type: 'button', value: 'classic' } },
		{ name: 'fancy', elementConfig: { type: 'button', value: 'fancy' } },
		{ name: 'floral', elementConfig: { type: 'button', value: 'floral' } },
		{ name: 'jazzy', elementConfig: { type: 'button', value: 'jazzy' } },
		{ name: 'juicy', elementConfig: { type: 'button', value: 'juicy' } },
		{ name: 'sour', elementConfig: { type: 'button', value: 'sour' } },
	]);

	const mapping = btnsDescriptions.map((btnDescription) => {
		return (
			<FilterBtn
				key={btnDescription.name}
				name={btnDescription.name}
				type={btnDescription.elementConfig.type}
				value={btnDescription.elementConfig.value}
				clicked={(event) => {
					console.log(event.target.value);
				}}
			/>
		);
	});

	return (
		<section className={classes.SectionCenter}>
			<h1 className={classes.ProductsTitle}>
				SHOP THE <br />
				FLAVOURS
			</h1>
			<button className={classes.ToggleFilter}>
				filter
				<span>
					<FontAwesomeIcon className={classes.MinusSign} icon={faMinusSquare} />
					{/* Tere will be a conditional to display a different fontAwesome link (FaPlusSquare) and there is a remove filters element too*/}
				</span>
			</button>
			<a className={classes.RemoveFilters}>x remove filters</a>
			<div className={classes.CategoriesHolder}>{mapping}</div>
		</section>
	);
};

export default filterSection;
