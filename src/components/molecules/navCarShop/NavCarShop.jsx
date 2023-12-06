import { Button, Img, Icon } from '../../index';
import PropTypes from 'prop-types';
import './NavCarShop.scss';
const NavCarShop = ({className}) => {
	return (
		<div className={`carShop ${className}`}>
			<div className='carShop__item'>
				<Img className={'carShop__img'} altImg={'weOffer'} />
				<div className='carShop__name'>Nike Air Force</div>
				<div className='carShop__active'>
					<p className='carShop__counter '>1</p>
					<div className='carShop__controller'>
						<Icon altIcon={'plusIcon'} />
						<Icon altIcon={'minusIcon'} />
					</div>
				</div>
				<Icon className={'carShop__delete'} altIcon={'deleteIcon'} />
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
