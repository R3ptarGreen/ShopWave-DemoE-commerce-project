import { useState, useEffect, useRef } from 'react';
import { Brand, MenuLink, MenuLinkActive, Icon } from '../../index';
import './Navbar.scss';
const Navbar = () => {

	const [showMenu, setShowMenu] = useState(false)
	const containerRef = useRef(null)
	const handleMenuDisplay = () => {
		setShowMenu(!showMenu)
	}
	const handleClickOutside = e => {
		if (containerRef.current && !containerRef.current.contains(e.target)) {
			setShowMenu(false);
		}
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<Brand className={'navbar__brand'} />
				<div className='container--desktop'>
					<MenuLink className={'navbar__desktop'} />
				</div>
				<MenuLinkActive />
				<div className='container--mobile'ref={containerRef}>
					<Icon altIcon={'iconMenu'} onClick={handleMenuDisplay}/>
					<MenuLink className={`navbar__mobile ${showMenu ? '': 'hide' }`} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
