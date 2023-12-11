import PropTypes from 'prop-types';
const Img = ({ altImg, className }) => {
	const pathImg = `public/assets/img/${altImg}.png`;
	return (
		<>
			<img className={className} src={pathImg} alt={altImg} />
		</>
	);
};
Img.propTypes = {
	altImg: PropTypes.string,
	className: PropTypes.string,
};
export default Img;
