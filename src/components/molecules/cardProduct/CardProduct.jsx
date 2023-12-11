import './CardProduct.scss';
import { Img, Icon } from '../../index';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useData } from '../../../hooks/index';

const CardProduct = ({ brand, price, product, activeColor, id }) => {
	const [currentImg, setCurrentImg] = useState(activeColor[0].img);
	const { addToCart } = useData();

	const handleChangeImg = img => {
		setCurrentImg(img);
	};

	const handleAddData = () => {
		const addData = {
			currentImg,
			product,
			id,
		};
		addToCart(addData);
	};

	return (
		<div className='cardProd'>
			<div className='cardProd__header'>
				<h3 className='cardProd__brand title--l'>{brand}</h3>
				<h3 className='cardProd__price title--l'>{price}</h3>
			</div>
			<figure className='cardProd__imgContainer'>
				<Img className={'cardProd__img'} altImg={currentImg} />
			</figure>
			<div className='cardProd__footer'>
				<div className='cardProd__active'>
					<h2 className='cardProd__name title--l'>{product}</h2>
					<div className='cardProd__controllerContainer'>
						{activeColor.map((item, index) => (
							<button
								className={`cardProd__activeColor ${item.color}`}
								key={index}
								onClick={() => handleChangeImg(item.img)}
							></button>
						))}
					</div>
				</div>
				<div className='cardProd__add'>
					<Icon altIcon={'addIcon'} onClick={handleAddData} />
				</div>
			</div>
		</div>
	);
};

CardProduct.propTypes = {
	id: PropTypes.string,
	brand: PropTypes.string,
	price: PropTypes.string,
	product: PropTypes.string,
	activeColor: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string,
			img: PropTypes.string,
		}),
	),
};

export default CardProduct;
