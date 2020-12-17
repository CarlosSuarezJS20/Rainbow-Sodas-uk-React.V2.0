import React, { useState } from 'react';

export const CartContext = React.createContext({
	cart: [],
	updateCart: () => {},
	updateMoreQty: () => {},
	updateLessQty: () => {},
	deleteProduct: () => {},
});

const CartContextProvider = (props) => {
	const [updatedCart, setUpdatedCart] = useState([]);

	const updateCartHandler = (prod) => {
		setUpdatedCart((curr) => [...curr, prod]);
	};

	const updateLessQuantity = (id) => {
		const copyCartProducts = [...updatedCart];
		const prodToUpdateIndex = copyCartProducts.findIndex(
			(prod) => prod.productId === id
		);
		copyCartProducts[prodToUpdateIndex].productQty -= 1;
		setUpdatedCart(copyCartProducts);
	};

	const updateQuantity = (id) => {
		const copyCartProducts = [...updatedCart];
		const prodToUpdateIndex = copyCartProducts.findIndex(
			(prod) => prod.productId === id
		);
		copyCartProducts[prodToUpdateIndex].productQty += 1;
		setUpdatedCart(copyCartProducts);
	};

	const deleteProductHandle = (id) => {
		const copyCartProducts = [...updatedCart];
		const findProdIndex = copyCartProducts.findIndex(
			(prod) => prod.productId === id
		);
		copyCartProducts.splice(findProdIndex, 1);
		setUpdatedCart(copyCartProducts);
	};

	return (
		<CartContext.Provider
			value={{
				cart: updatedCart,
				updateCart: updateCartHandler,
				updateMoreQty: updateQuantity,
				updateLessQty: updateLessQuantity,
				deleteProduct: deleteProductHandle,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
