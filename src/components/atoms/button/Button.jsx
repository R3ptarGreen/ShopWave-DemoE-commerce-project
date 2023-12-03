import './Button.scss';
import PropTypes from 'prop-types';


const Button = ({ classNameColor, buttonText }) => {
	return (
		<>
		<div className='btnContainer'>
				<button className={`button text--m ${classNameColor}`}>{buttonText}</button>
		</div>
		</>
	);
};

Button.propTypes = {
	classNameColor: PropTypes.string,
	buttonText: PropTypes.string,
};

export default Button;
