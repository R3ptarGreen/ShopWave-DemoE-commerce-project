import './FooterBrand.scss';
import { Brand } from '../../index';
const FooterBrand = () => {
	return (
		<section className='footer__brand'>
			<Brand />
			<div className='footer__social'>
				<a href=''>
					<img src='public/assets/svg/facebookFooterIcon.svg' alt='facebook' />
				</a>
				<a href=''>
					<img src='public/assets/svg/instaFooterIcon.svg' alt='insta' />
				</a>
				<a href=''>
					<img src='public/assets/svg/twitterFooterIcon.svg' alt='twitter' />
				</a>
			</div>
		</section>
	);
};

export default FooterBrand;
