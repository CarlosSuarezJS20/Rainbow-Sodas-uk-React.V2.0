import React, { useState, useContext } from 'react';
import classes from './FiltersSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import FilterBtn from '../UI/FilterBtn/FilterBtn';
import { ProductContext } from '../context/products-context';

const filterSection = () => {
	const filtersContext = useContext(ProductContext);

	const [categoriesDrawerStatus, setCategoriesDrawerStatus] = useState(false);
	const [selectedFilters, setSelectedFilters] = useState([]);

	const displayFilters = () => {
		if (categoriesDrawerStatus) {
			setCategoriesDrawerStatus(false);
		} else {
			setCategoriesDrawerStatus(true);
		}
	};

	// Showing categories filter section with classes
	let attachedClassesCategorySection = [
		classes.CategoriesHolder,
		classes.CategoriesClose,
	];

	if (categoriesDrawerStatus) {
		attachedClassesCategorySection = [
			classes.CategoriesHolder,
			classes.CategoriesShow,
		];
	}

	const filterProductList = (filterName) => {
		console.log(filterName);
		setSelectedFilters((prevFilters) => [...prevFilters, filterName]);
		console.log(selectedFilters);
		filtersContext.filterProducts(selectedFilters);
	};

	const mapping = filtersContext.filtersbtns.map((btnDescription) => {
		return (
			<FilterBtn
				key={btnDescription.name}
				name={btnDescription.name}
				type={btnDescription.elementConfig.type}
				value={btnDescription.elementConfig.value}
				clicked={filterProductList.bind(this, btnDescription.name)}
			/>
		);
	});

	return (
		<section className={classes.SectionCenter}>
			<h1 className={classes.ProductsTitle}>
				SHOP THE <br />
				FLAVOURS
			</h1>
			<button className={classes.ToggleFilter} onClick={displayFilters}>
				filter
				<span>
					{categoriesDrawerStatus ? (
						<FontAwesomeIcon
							className={classes.FilterMinusSign}
							icon={faMinusSquare}
						/>
					) : (
						<FontAwesomeIcon
							className={classes.FilterPlusSign}
							icon={faPlusSquare}
						/>
					)}
				</span>
			</button>
			<a className={classes.RemoveFilters}>x remove filters</a>
			<div className={attachedClassesCategorySection.join(' ')}>{mapping}</div>
		</section>
	);
};

export default filterSection;
