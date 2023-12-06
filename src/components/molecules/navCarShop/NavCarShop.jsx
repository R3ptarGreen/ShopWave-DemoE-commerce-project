import { Button, Img, Icon } from '../../index';
import PropTypes from 'prop-types';
import './NavCarShop.scss';
import {useEffect, useState} from 'react'
const NavCarShop = ({className}) => {
	const [counter, setCounter] = useState(1)
	const handleAddCounter = () => {
		setCounter(counter + 1)
	}
	const handleRemoveCounter = () => {
		setCounter(counter - 1)
	}
	useEffect(()=>{
		if(counter <  1){
			setCounter(0)
		}
	},[counter])
	return (
		<div className={`carShop ${className}`}>
			<div className='carShop__item'>
				<Img className={'carShop__img'} altImg={'weOffer'} />
				<div className='carShop__name'>Nike Air Force</div>
				<div className='carShop__active'>
					<p className='carShop__counter '>{counter}</p>
					<div className='carShop__controller'>
						<Icon altIcon={'minusIcon'} onClick={handleRemoveCounter}/>
						<Icon altIcon={'plusIcon'} onClick={handleAddCounter}/>
					</div>
				</div>
				<Icon className={'carShop__delete'} altIcon={'deleteIcon'}/>
			</div>
			<Button
				to={'/pay'}
				classNameColor={'carShop__button'}
				buttonText={'Go Pay'}
			/>
		</div>
	);
};
NavCarShop.propTypes = {
    className:PropTypes.string
}
export default NavCarShop;
