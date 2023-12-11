import './BrandCollection.scss';
import PropTypes from 'prop-types';
const BrandCollection = ({ brandName, className }) => {
	return (
		<>
			<p className={`collection__text ${className}`}>{brandName} Collection</p>
		</>
	);
};
BrandCollection.propTypes = {
	brandName: PropTypes.string,
	className: PropTypes.string,
};

export default BrandCollection;
