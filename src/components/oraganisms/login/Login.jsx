import './Login.scss';
import { LoginContainer } from '../../index';
const Login = () => {
	return (
		<div className='login__container'>
			<figure className='login__img'>
				<button className='login__switch title--m'>Log-In</button>
				<button className='login__switch title--m disactive'>Sign-Up</button>
			</figure>
			<LoginContainer buttonText={'Log-In'} logOrSig={'Log-In'} />
			<LoginContainer className={'hide'} />
		</div>
	);
};

export default Login;
