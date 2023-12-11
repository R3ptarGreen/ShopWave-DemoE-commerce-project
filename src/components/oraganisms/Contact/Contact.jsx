import './Contact.scss';
import { ContactForm, ContactInfo } from '../../index';
const Contact = () => {
	return (
		<div className='contact__container'>
			<ContactForm />
			<ContactInfo />
		</div>
	);
};

export default Contact;
