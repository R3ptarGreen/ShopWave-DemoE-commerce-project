import {Brand,MenuLink,MenuLinkActive, Icon} from '../../index'
import './Navbar.scss';
const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<Brand />
				<div className='container--desktop'>
					<MenuLink />
					<MenuLinkActive />
				</div>
        <div className='container--mobile'>
          <Icon altIcon={'iconMenu'}/>
        </div>
			</div>
		</nav>
	);
};

export default Navbar;
