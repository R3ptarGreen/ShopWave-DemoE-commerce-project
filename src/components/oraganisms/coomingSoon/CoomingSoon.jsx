import './CoomingSoon.scss';
import { Button, Img } from '../../index';
const CoomingSoon = () => {
	return (
		<div className='cooming__container'>
			<figure className='cooming__imgContainer'>
				<Img className={'cooming__img'} altImg={'coomingSoon'} />
			</figure>
			<div className='cooming__info'>
				<h2 className='cooming__title title--xl'>Cooming Soon</h2>
				<p className='text--m'>
					We are currently working hard building this page!
				</p>
				<Button
					to={'/ShopWave-DemoE-commerce-project/'}
					classNameColor={'cooming__button'}
					buttonText={'Go Home'}
				/>
			</div>
		</div>
	);
};

export default CoomingSoon;
