import React, { useState } from 'react';

export const CartContext = React.createContext({
	cart: [],
	showCheckOut: false,
	updateCart: () => {},
	updateMoreQty: () => {},
	updateLessQty: () => {},
	deleteProduct: () => {},
	showCheckOutCard: () => {},
	hideCheckOutCard: () => {},
});

const CartContextProvider = (props) => {
	const [updatedCart, setUpdatedCart] = useState([]);
	const [updateShowTotal, setUpdateShowTotal] = useState(false);

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

	const updateShowTotalToTrue = () => {
		setUpdateShowTotal(true);
	};

	const updateShowTotalToFalse = () => {
		setUpdateShowTotal(false);
	};
	return (
		<CartContext.Provider
			value={{
				cart: updatedCart,
				showCheckOut: updateShowTotal,
				updateCart: updateCartHandler,
				updateMoreQty: updateQuantity,
				updateLessQty: updateLessQuantity,
				deleteProduct: deleteProductHandle,
				showCheckOutCard: updateShowTotalToTrue,
				hideCheckOutCard: updateShowTotalToFalse,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
