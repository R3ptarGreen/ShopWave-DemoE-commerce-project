import { Img, Icon, Button } from '../../index';
import PropTypes from 'prop-types';
import './NavCarShop.scss';
import { useData } from '../../../hooks/index';

const NavCarShop = ({ className }) => {
	const { cart, removeFromCart, setCart } = useData();

	const handleRemove = index => {
		removeFromCart(index);
	};

	const handleIncrement = index => {
		const updatedCart = [...cart];
		updatedCart[index].quantity += 1;

		setCart(updatedCart); // Actualizar el carrito en el contexto directamente
	};

	const handleDecrement = index => {
		const updatedCart = [...cart];

		if (updatedCart[index].quantity > 1) {
			updatedCart[index].quantity -= 1;
		} else {
			// Si la cantidad es 1 o menos, elimina el producto del carrito
			removeFromCart(index);
			return;
		}

		setCart(updatedCart); // Utiliza setCart para actualizar el carrito
	};

	return (
		<div className={`carShop ${className}`}>
			{cart.map((item, index) => (
				<div className='carShop__item' key={item.currentImg}>
					<Img className={'carShop__img'} altImg={item.currentImg} />
					<p className='carShop__name'>{item.product}</p>
					<div className='carShop__quantityItem'>
						<input
							className='carShop__input'
							type='number'
							value={item.quantity}
							readOnly
						/>
						<div className='carShop__quantityController'>
							<Icon
								altIcon={'minusIcon'}
								onClick={() => handleDecrement(index)}
							/>
							<Icon
								altIcon={'plusIcon'}
								onClick={() => handleIncrement(index)}
							/>
						</div>
					</div>
					<Icon
						className={'carShop__delete'}
						altIcon={'deleteIcon'}
						onClick={() => handleRemove(index)}
					/>
				</div>
			))}
			{cart.length === 0 ? <p className='carShop__emp'>Empty Cart</p> : null}
			{cart.length > 0 && (
				<Button
					classNameColor={'carShop__button'}
					buttonText={'Buy Here'}
					to={'/shop'}
				/>
			)}
		</div>
	);
};

NavCarShop.propTypes = {
	className: PropTypes.string,
};

export default NavCarShop;
