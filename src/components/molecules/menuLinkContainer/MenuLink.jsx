import './MenuLink.scss';
import {Link} from 'react-router-dom'
const MenuLink = () => {
  return (
    <div className='navbar__menuLinkContainer'>
        <ul className='navbar__menuLinkTextContainer'>
            <li className='navbar__menuLinkText text--m'><Link to={'/'}>Home</Link></li>
            <li className='navbar__menuLinkText text--m'><Link>Shop</Link></li>
            <li className='navbar__menuLinkText text--m'><Link to={'/about'}>About</Link></li>
            <li className='navbar__menuLinkText text--m'><Link>Blog</Link></li>
            <li className='navbar__menuLinkText text--m'><Link>Contact</Link></li>
        </ul>
    </div>
  )
}
 
export default MenuLink