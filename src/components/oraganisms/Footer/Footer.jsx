import './Footer.scss';
import { FooterBrand, FooterContent } from '../../index';
const Footer = () => {
	return (
		<footer className='footer'>
			<FooterBrand />
			<FooterContent />
			<section className='footer__credit'>
				<p>Made in figma and coded by Edgar Mendez</p>
			</section>
		</footer>
	);
};

export default Footer;
