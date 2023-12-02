import PropTypes from 'prop-types'
import './Icon.scss';
const Icon = ({altIcon, iconLink}) => {

    const iconPath = `/public/assets/svg/${altIcon}.svg`;

  return (
    <a href={iconLink} className='icon'>
        <img src={iconPath} alt={altIcon} />
    </a>
  )
}

Icon.propTypes = {
    altIcon: PropTypes.string,
    iconLink: PropTypes.string

}

export default Icon