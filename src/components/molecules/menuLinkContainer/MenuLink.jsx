import './MenuLink.scss';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const MenuLink = ({className}) => {
  return (
    <div className='navbar__menuLinkContainer'>
        <ul className={className}>
            <li className='navbar__menuLinkText text--m'><Link to={'/'}>Home</Link></li>
            <li className='navbar__menuLinkText text--m'><Link to={'/shop'}>Shop</Link></li>
            <li className='navbar__menuLinkText text--m'><Link to={'/about'}>About</Link></li>
            <li className='navbar__menuLinkText text--m'><Link to={'/contact'}>Contact</Link></li>
        </ul>
    </div>
  )
}
MenuLink.propTypes = {
  className: PropTypes.string
}
export default MenuLink