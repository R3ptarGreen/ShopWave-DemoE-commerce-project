import PropTypes from 'prop-types';
import './Icon.scss';
import { Link } from 'react-router-dom';
const Icon = ({ altIcon, iconLink, className, onClick }) => {
	const iconPath = `assets/svg/${altIcon}.svg`;
	return (
		<Link to={iconLink} className='icon'>
			<img
				className={className}
				src={iconPath}
				alt={altIcon}
				onClick={onClick}
			/>
		</Link>
	);
};

Icon.propTypes = {
	altIcon: PropTypes.string,
	iconLink: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Icon;
