import { useState, useEffect } from 'react';
import { Icon } from '../../index';
import './Up.scss';
import PropTypes from 'prop-types';

const Up = () => {
	const [showUp, setShowUp] = useState(false);
	const distance = 200;

	const handleUp = () => {
		document.querySelector('.main').scrollIntoView({
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= distance) {
				setShowUp(true);
			} else {
				setShowUp(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div
				to='#main'
				className={`up ${showUp ? '' : 'hide'}`}
				onClick={handleUp}
			>
				<Icon className={'up__icon'} altIcon={'upIcon'} />
			</div>
		</>
	);
};
Up.propTypes = {
	handleUp: PropTypes.func,
};
export default Up;
