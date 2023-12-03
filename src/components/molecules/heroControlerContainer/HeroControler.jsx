import {Button} from '../../index'
import PropTypes from 'prop-types'
import './HeroControler.scss'
const HeroControler = ({productName}) => {
  return (
    <div className='hero__controllerContainer'>
        <h2 className='hero__productName'>{productName}Hola</h2>
        <Button classNameColor={'hero__button'} buttonText={'Buy Here'}/>
        <div className='carrouselController'>
            <button className='controller'></button>
            <button className='controller'></button>
            <button className='controller'></button>
        </div>
    </div>
  )
} 
HeroControler.propTypes = {
    productName: PropTypes.string
}
export default HeroControler