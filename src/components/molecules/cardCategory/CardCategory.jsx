import './CardCategory.scss';
import { Button, Img } from '../../index';
import PropTypes from 'prop-types';

const CardCategory = ({ categoryName, altImg }) => {
	return (
		<div className='card'>
			<figure className='card__imgContainer'>
				<Img className={'card__img'} altImg={altImg} />
			</figure>
			<div className='card__info'>
				<h2 className='title--l'>{categoryName}</h2>
				<Button classNameColor={'card__btn'} buttonText={'More'} />
			</div>
		</div>
	);
};
CardCategory.propTypes = {
	categoryName: PropTypes.string,
	altImg: PropTypes.string,
};

export default CardCategory;
