# Read Me

> This read.me file intends to explain the main fundamentals and approaches I undertook during the development of this project.

---

### Table of Contents

- [Description ](#description)
- [Technologies and Dependencies](#technologies-and-dependencies)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Following up my ecommerce UK Rainbow sodas project. I migrated this website to react.js. The main purpose was to practice react hooks and implement a server to the previous prototype

### Capabilities

- Multiple product categories Filter
- Cart manipulation (ADD, REMOVE, INCREASE, DECREASE QUANTITY)
- Fetch API
- Responsive
- Fully Hosted

## Technologies and Dependencies

- React.js
- React-router
- react-scroll
- CSS Modules
- Fontawesome
- Firebase (hosting server)

Some of the practice opporunities and new learnings:

- UseState(), UseEffect(), Context
- Web page architecure

[Back To The Top](#read-me)

### Highlight coding learning - Fetching from a server

An example of how I use fetch() javaScript

```
	useEffect(() => {
		fetch('https://rainbow-soda-uk-default-rtdb.firebaseio.com/products.json')
			.then((response) => response.json())
			.then((responseData) => {
				const productsData = [];

				for (const key in responseData) {
					productsData.push({
						id: key,
						productName: responseData[key].productName,
						productImg: responseData[key].productImgURL,
						productPrice: responseData[key].price,
						productTypes: responseData[key].type,
						productQty: responseData[key].qty,
					});
				}
				if (filters.length !== 0) {
					// removing duplicate
					const updatedFilters = filters.filter((filter, index) => {
						return filters.indexOf(filter) === index;
					});
					const filteredProducts = productsData.filter((prod) => {
						return prod.productTypes.some((prodType) =>
							updatedFilters.includes(prodType)
						);
					});
					setUpdatedProductList(filteredProducts);
				} else {
					setUpdatedProductList(productsData);
				}
				// setting up filters btns properties after fetching data from server
			})
			.catch((error) => {
				setError('Something Went Wrong!  :(');
			});
	}, [filters, setUpdatedProductList]);
```

---

## License

MIT License

Copyright (c) [2020] [Carlos Suarez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PUxwPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me)

---

## Author Info

- LinkedIn - [Link](https://www.linkedin.com/in/carlos-suarez-msc-a3659141/)
- Website - [my-portfolioweb](https://my-portfolioweb-ba888.web.app/)

[Back To The Top](#read-me)
