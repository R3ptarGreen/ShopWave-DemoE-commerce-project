import './LoginContainer.scss';
import { Button, Input } from '../../index';
import PropTypes from 'prop-types';

const LoginContainer = ({ logOrSig, buttonText, className }) => {
	return (
		<div className={`LS ${className}`}>
			<h2 className='LS__title title--l'>{logOrSig}</h2>
			<form className='LS__form'>
				<Input inputName={'Name'} />
				<Input inputName={'Email'} />
				<Input inputName={'password'} />
			</form>
			<Button classNameColor={'LS__buttonColor'} buttonText={buttonText} />
		</div>
	);
};
LoginContainer.propTypes = {
	logOrSig: PropTypes.string,
	buttonText: PropTypes.string,
	className: PropTypes.string,
};

export default LoginContainer;
