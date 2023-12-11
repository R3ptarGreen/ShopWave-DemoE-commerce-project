import './Offer.scss';
import { OfferCard } from '../../index';
import PropTypes from 'prop-types';
const Offer = ({
	discount,
	discountColor,
	title,
	subtitle,
	save,
	textColor,
	bgColor,
	img,
}) => {
	return (
		<div className='offer__container'>
			<OfferCard
				offerDiscount={discount}
				discountColor={discountColor}
				offerTitle={title}
				offerSubtitle={subtitle}
				offerSave={save}
				textColor={textColor}
				bgColor={bgColor}
				altImg={img}
			/>
		</div>
	);
};
Offer.propTypes = {
	discount: PropTypes.string,
	discountColor: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	save: PropTypes.string,
	textColor: PropTypes.string,
	bgColor: PropTypes.string,
	img: PropTypes.string,
};

export default Offer;
