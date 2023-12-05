import { useState, useEffect } from 'react';
import { Icon } from '../../index';
import './Up.scss';
const Up = () => {
	const [showUp, setShowUp] = useState(false);
	const distance = 200;

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
			<a href='#main' className={`up ${showUp ? 'show' : 'hide'}`}>
				<Icon className={'up__icon'} altIcon={'upIcon'} />
			</a>
		</>
	);
};

export default Up;
