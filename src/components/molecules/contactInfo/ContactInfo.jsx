import './ContactInfo.scss';
import { Icon } from '../../index';
const ContactInfo = () => {
	return (
		<div className='contact__info info'>
			<h2 className='info__text title--l'>Info</h2>
			<div className='info__container'>
				<div className='info__content'>
					<Icon altIcon={'emailIcon'} />
					<p className='info__text text--m'>example@email.com</p>
				</div>
				<div className='info__content'>
					<Icon altIcon={'phoneIcon'} />
					<p className='info__text text--m'>+xx x xxx-xxx-xxx</p>
				</div>
				<div className='info__content'>
					<Icon altIcon={'companyIcon'} />
					<p className='info__text text--m'>Av.Example C.xx</p>
				</div>
				<div className='info__content'>
					<Icon altIcon={'clockIcon'} />
					<p className='info__text text--m'>Monday to Friday 9am to 8pm</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
