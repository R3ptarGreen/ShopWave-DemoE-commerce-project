import { Link } from "react-router-dom";
import Icon from "../../atoms/IconComponent/Icon"
import './MenuLinkActive.scss';

const MenuLinkActive = () => {
  return (
    <div className="navbar__menuLinkActiveContainer">
        <Icon altIcon={'iconUser'}/>
        <Link to={'/login'} className="navbar__menuLinkActiveText text--m">Log-In/Sign-Up</Link>
        <Icon altIcon={'iconSearch'}/>
        <Icon altIcon={'iconShop'}/>
    </div>
  )
}

export default MenuLinkActive 