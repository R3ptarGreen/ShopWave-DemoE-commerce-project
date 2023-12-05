import './MenuLink.scss';
import {Link} from 'react-router-dom'
const MenuLink = () => {
  return (
    <div className='navbar__menuLinkContainer'>
        <ul className='navbar__menuLinkTextContainer'>
            <li className='navbar__menuLinkText text--m'><Link to={'/'}>Home</Link></li>
            <li className='navbar__menuLinkText text--m'><Link to={'/shop'}>Shop</Link></li>
            <li className='navbar__menuLinkText text--m'><Link to={'/about'}>About</Link></li>
            <li className='navbar__menuLinkText text--m'><Link to={'/contact'}>Contact</Link></li>
        </ul>
    </div>
  )
}
 
export default MenuLink