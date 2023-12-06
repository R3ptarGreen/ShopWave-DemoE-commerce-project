import './Login.scss';
import { LoginContainer } from '../../index';
import {useState} from 'react'

const Login = () => {
	const [showLog, setShowLog] = useState(true);
	const [showSign, setShowSign] = useState(false);

	const handleListFunctions = {
		log: () => {
			setShowLog(true)
			setShowSign(false)
		},
		sign: () => {
			setShowLog(false)
			setShowSign(true)
		}
	}

	const handleClick = key => e => {
		e.preventDefault()
		const handleFunctions = handleListFunctions[key];
		handleFunctions && handleFunctions();
	}
	return (
		<div className='login__container'>
			<figure className='login__img'>
				<button className={`login__switch title--m ${showLog ? '':'disactive'}`} onClick={handleClick('log')}>Log-In</button>
				<button className={`login__switch title--m ${showSign ? '':'disactive'}`} onClick={handleClick('sign')}>Sign-Up</button>
			</figure>
			<LoginContainer className={showLog ? '':'hide'} buttonText={'Log-In'} logOrSig={'Log-In'} />
			<LoginContainer className={showSign ? '':'hide'} buttonText={'Sign-Up'} logOrSig={'Sign-Up'}/>
		</div>
	);
};

export default Login
