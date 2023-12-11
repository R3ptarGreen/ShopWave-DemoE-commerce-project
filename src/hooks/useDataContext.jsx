import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [countProduct, setCountProduct] = useState(0);

	const addToCart = product => {
		const existingProduct = cart.find(
			item => item.id === product.id && item.currentImg === product.currentImg,
		);

		if (existingProduct) {
			// Si el producto y la imagen son iguales, incrementa la cantidad
			const updatedCart = cart.map(item =>
				item.id === existingProduct.id &&
				item.currentImg === existingProduct.currentImg
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);
			setCart(updatedCart);
		} else {
			// Si el producto no está en el carrito o la imagen es diferente, agrégalo como un nuevo producto
			setCart([...cart, { ...product, quantity: 1 }]);
		}

		setCountProduct(countProduct + 1);
	};

	const removeFromCart = index => {
		const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
		setCart(newCart);
		setCountProduct(countProduct - 1);
	};

	return (
		<DataContext.Provider
			value={{ cart, addToCart, removeFromCart, countProduct, setCart }}
		>
			{children}
		</DataContext.Provider>
	);
};

DataProvider.propTypes = {
	children: PropTypes.node,
};

export const useData = () => {
	return useContext(DataContext);
};
