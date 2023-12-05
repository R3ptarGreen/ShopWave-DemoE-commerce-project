import './Button.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Button = ({ classNameColor, buttonText, to }) => {
	return (
		<>
		<div className='btnContainer'>
				<Link to={to}><button className={`button text--m ${classNameColor}`}>{buttonText}</button></Link>
		</div>
		</>
	);
};

Button.propTypes = {
	classNameColor: PropTypes.string,
	buttonText: PropTypes.string,
	to: PropTypes.string
};

export default Button;
