import './FooterContent.scss';
import {Link} from 'react-router-dom'
const FooterContent = () => {
	return (
		<section className='footer__contentContainer'>
			<div className='footer__content'>
				<h1 className='footer__title title--l'>Contact</h1>
				<div className='footer__infoContainer'>
					<Link to={'/contact'} className='footer__text text--m'>+52 xx-xx-xx</Link>
					<Link to={'/contact'} className='footer__text text--m'>example@gmail.com</Link>
				</div>
			</div>
			<div className='footer__content'>
				<h1 className='footer__title title--l'>Company</h1>
				<div className='footer__infoContainer'>
					<Link to={'/about'} className='footer__text text--m'>About us</Link>
				</div>
			</div>
			<div className='footer__content'>
				<h1 className='footer__title title--l'>Services</h1>
				<div className='footer__infoContainer'>
					<p className='footer__text text--m'>Track order</p>
					<p className='footer__text text--m'>Gift card</p>
				</div>
			</div>
			<div className='footer__content'>
				<h1 className='footer__title title--l'>Help</h1>
				<div className='footer__infoContainer'>
					<p className='footer__text text--m'>Feedback</p>
					<p className='footer__text text--m'>Shopcart help</p>
				</div>
			</div>
		</section>
	);
};

export default FooterContent;
