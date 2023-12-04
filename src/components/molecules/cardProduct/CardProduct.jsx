import './CardProduct.scss';
import {Img, Icon} from '../../index'
const CardProduct = () => {
  return (
    <div className='cardProd'>
        <div className='cardProd__header'>
            <h3 className='cardProd__brand title--l'>Brand</h3>
            <h3 className='cardProd__price title--l'>$9.99</h3>
        </div>
        <figure className='cardProd__imgContainer'>
            <Img className={'cardProd__img'} altImg={'76Jqq9nY-Black'}/>
        </figure>
        <div className='cardProd__footer'>
            <div className='cardProd__active'>
                <h2 className='cardProd__name title--l'>Name</h2>
                <div className='cardProd__controllerContainer'>
                    <button className={`cardProd__activeColor`}></button>
                    <button className={`cardProd__activeColor`}></button>
                    <button className={`cardProd__activeColor`}></button>
                </div>
            </div>
            <div className='cardProd__add'>
                <Icon altIcon={'addIcon'}/>
            </div>
        </div>
    </div>
  )
}

export default CardProduct