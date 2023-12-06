import './Brand.scss';
import PropTypes from 'prop-types'
const Brand = ({className}) => {
	return (
		<div className='navbar__brandContainer'>
				<h1 className={`navbar__brandText title--xl ${className}`}>ShopWave</h1>
		</div>
	);
};
Brand.propTypes = {
	className: PropTypes.string
}
export default Brand;
