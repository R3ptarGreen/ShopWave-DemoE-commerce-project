import { Button, Img, Icon } from '../../index';
import PropTypes from 'prop-types';
import './NavCarShop.scss';
import {useState} from 'react'
const NavCarShop = ({className, img, product}) => {
	const [counter, setCounter] = useState(1)

	const handleCounter = amount => e => {
		e.preventDefault()
		const newCounter = counter + amount;
		setCounter(newCounter > 0 ? newCounter : 1)
	}
	return (
		<ul className={`carShop ${className}`}>
			<li className='carShop__item'>
				<Img className={'carShop__img'} altImg={img} />
				<div className='carShop__name'>{product}</div>
				<div className='carShop__active'>
					<p className='carShop__counter '>{counter}</p>
					<div className='carShop__controller'>
						<Icon altIcon={'minusIcon'} onClick={handleCounter(-1)}/>
						<Icon altIcon={'plusIcon'} onClick={handleCounter(1)}/>
					</div>
				</div>
				<Icon className={'carShop__delete'} altIcon={'deleteIcon'}/>
			</li>
			<Button
				to={'/pay'}
				classNameColor={'carShop__button'}
				buttonText={'Go Pay'}
			/>
		</ul>
	);
};
NavCarShop.propTypes = {
    className:PropTypes.string,
	img: PropTypes.string,
	product: PropTypes.string 
}
export default NavCarShop;
