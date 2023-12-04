import './FooterBrand.scss';
import { Brand, Icon } from '../../index';
const FooterBrand = () => {
	return (
		<section className='footer__brand'>
			<Brand />
			<div className='footer__social'>
				<Icon altIcon={'facebookFooterIcon'}/>
				<Icon altIcon={'instaFooterIcon'}/>
				<Icon altIcon={'twitterFooterIcon'}/>
			</div>
		</section>
	);
};

export default FooterBrand;
