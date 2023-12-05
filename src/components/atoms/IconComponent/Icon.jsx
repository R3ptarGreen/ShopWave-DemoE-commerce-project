import PropTypes from 'prop-types'
import './Icon.scss';
const Icon = ({altIcon, iconLink, className}) => {

    const iconPath = `/public/assets/svg/${altIcon}.svg`;

  return (
    <a href={iconLink} className='icon'>
        <img className={className} src={iconPath} alt={altIcon} />
    </a>
  )
}

Icon.propTypes = {
    altIcon: PropTypes.string,
    iconLink: PropTypes.string,
    className: PropTypes.string

}

export default Icon