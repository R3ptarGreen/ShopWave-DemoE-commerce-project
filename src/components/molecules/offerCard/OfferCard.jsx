import './OfferCard.scss';
import { Img, Button } from '../../index';
import PropTypes from 'prop-types';
const OfferCard = ({
	offerDiscount,
	offerSave,
	offerSubtitle,
	offerTitle,
	altImg,
    bgColor,
    textColor,
    discountColor
}) => {
	return (
		<div className={`offer__card ${bgColor} ${textColor}`}>
			<div className='offer__titleContainer'>
				<h3 className={`title--l ${discountColor}`}>{offerDiscount}</h3>
				<h2 className='title--xl'>{offerTitle}</h2>
			</div>
			<figure className='offer__imgContainer'>
				<Img className={'offer__img'} altImg={altImg} />
			</figure>
			<div className='offer__infoContainer'>
				<h2 className='title--l'>{offerSubtitle}</h2>
				<p className='text--m'>Save up to {offerSave}</p>
                <Button classNameColor={'offer__button'} buttonText={'Buy Here'} to={'/shop'}/>
			</div>
		</div>
	);
};
OfferCard.propTypes = {
	offerDiscount: PropTypes.string,
	offerSave: PropTypes.string,
	offerSubtitle: PropTypes.string,
	offerTitle: PropTypes.string,
	altImg: PropTypes.string,
    bgColor: PropTypes.string,
    discountColor: PropTypes.string,
    textColor: PropTypes.string
};

export default OfferCard;
