import { Button } from '../../index';
import PropTypes from 'prop-types';
import './HeroControler.scss';
const HeroControler = ({
	productName,
	onButtonClick,
	btnCount,
	activeIndex,
}) => {
	return (
		<div className='hero__controllerContainer'>
			<h2 className='hero__productName'>{productName}</h2>
			<Button
				classNameColor={'hero__button'}
				buttonText={'Buy Here'}
				to={'shop'}
			/>
			<div className='carrouselController'>
				{[...Array(btnCount).keys()].map(index => (
					<button
						className={`controller ${
							index === activeIndex ? 'activeColor' : ''
						}`}
						key={index}
						onClick={() => onButtonClick(index)}
					></button>
				))}
			</div>
		</div>
	);
};
HeroControler.propTypes = {
	productName: PropTypes.string,
	onButtonClick: PropTypes.func,
	btnCount: PropTypes.number,
	activeIndex: PropTypes.number,
};
export default HeroControler;
