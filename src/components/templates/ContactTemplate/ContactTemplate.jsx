import './ContactTemplate.scss';
import Contact from '../../oraganisms/contact/Contact'
import Up from '../../atoms/up/Up'
const ContactTemplate = () => {
	return (
		<>
			<main className='contact main'>
				<Contact />
				<div className='contact__rectangle'></div>
			</main>
			<Up />
			
		</>
	);
};

export default ContactTemplate;
