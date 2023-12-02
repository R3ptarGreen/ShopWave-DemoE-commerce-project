import Icon from "../../atoms/IconComponent/Icon"
import './MenuLinkActive.scss';

const MenuLinkActive = () => {
  return (
    <div className="navbar__menuLinkActiveContainer">
        <Icon altIcon={'iconUser'}/>
        <p className="navbar__menuLinkActiveText text--m">Log-In/Sign-Up</p>
        <Icon altIcon={'iconSearch'}/>
        <Icon altIcon={'iconShop'}/>
    </div>
  )
}

export default MenuLinkActive 