import './MenuLink.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const MenuLink = ({ classNameList, classNameContainer }) => {
	return (
		<div className={`navbar__menuLinkContainer ${classNameContainer}`}>
			<ul className={classNameList}>
				<li className='navbar__menuLinkText text--m'>
					<Link to={'/'}>Home</Link>
				</li>
				<li className='navbar__menuLinkText text--m'>
					<Link to={'/shop'}>Shop</Link>
				</li>
				<li className='navbar__menuLinkText text--m'>
					<Link to={'/about'}>About</Link>
				</li>
				<li className='navbar__menuLinkText text--m'>
					<Link to={'/contact'}>Contact</Link>
				</li>
			</ul>
		</div>
	);
};
MenuLink.propTypes = {
	classNameList: PropTypes.string,
	classNameContainer: PropTypes.string,
};
export default MenuLink;
