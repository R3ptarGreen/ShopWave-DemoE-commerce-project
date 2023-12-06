
import './MenuLinkActive.scss';
import { useState, useEffect, useRef } from 'react';
import { Icon, NavCarShop } from '../../index';

const MenuLinkActive = () => {
	const [showSearch, setShowSearch] = useState(false);
	const [showCar, setShowCar] = useState(false);
  const containerRef = useRef(null)
	const handleSearch = () => {
		setShowSearch(!showSearch);
	};
	const handleCarShop = () => {
		setShowCar(!showCar);
	};
  const handleClickOutside = (e) => {
    if(containerRef.current && !containerRef.current.contains(e.target)){
      setShowCar(false)
      setShowSearch(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }  
  }, [])

	return (
		<div className='navbar__menuLinkActiveContainer' ref={containerRef}>
			<Icon altIcon={'iconUser'} iconLink={'/login'} />
			<Icon altIcon={'iconSearch'} onClick={handleSearch} />
			<input
				className={`navbar__search ${showSearch ? '' : 'hide'}`}
				type='text'
			/>
			<Icon altIcon={'iconShop'} onClick={handleCarShop} />
			<NavCarShop className={showCar ? '' : 'hide'}/>
		</div>
	);
};

export default MenuLinkActive;
