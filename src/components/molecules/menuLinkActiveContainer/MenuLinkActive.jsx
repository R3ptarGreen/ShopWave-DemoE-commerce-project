import './MenuLinkActive.scss';
import { useState, useEffect, useRef } from 'react';
import { Icon, NavCarShop } from '../../index';

const MenuLinkActive = () => {
	//hooks
	const [showSearch, setShowSearch] = useState(false);
	const [showCar, setShowCar] = useState(false);
	const containerRef = useRef(null);
	//Functions List
	const handleListClickFunctions = {
		search: () => setShowSearch(!showSearch),
		carShop: () => setShowCar(!showCar),
	};
	//events
	const handleClick = key => e => {
		e.preventDefault();
		const handleFunction = handleListClickFunctions[key];
		handleFunction && handleFunction();
	};
	const handleClickOutside = e => {
		if (containerRef.current && !containerRef.current.contains(e.target)) {
			setShowCar(false);
			setShowSearch(false);
		}
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className='navbar__menuLinkActiveContainer' ref={containerRef}>
			<Icon altIcon={'iconUser'} iconLink={'/login'} />
			<Icon altIcon={'iconSearch'} onClick={handleClick('search')} />
			<input
				className={`navbar__search ${showSearch ? '' : 'hide'}`}
				type='text'
			/>
			<Icon altIcon={'iconShop'} onClick={handleClick('carShop')} />
			<NavCarShop className={showCar ? '' : 'hide'} />
		</div>
	);
};

export default MenuLinkActive;
