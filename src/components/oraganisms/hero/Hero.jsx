import { BrandCollection, HeroControler, Img } from '../../index';
import './Hero.scss';
const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__carrousel'>
				<Img className={'hero__img'} altImg={'heroImg'} />
			  <BrandCollection className={'hero__brandCollection'} brandName={'Nike'} />
			</div>
			<HeroControler />
		</div>
	);
};

export default Hero;
