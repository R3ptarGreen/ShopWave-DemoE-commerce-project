import './ContactForm.scss';
import { Button, Input } from '../../index';
const ContactForm = () => {
	return (
		<div className='contact__form form'>
			<h2 className='title--l'>Contact Us</h2>
			<p className='text--m'>
				Feel free to contact ud any time. We will get back to you as soon as we
				can!
			</p>
			<form className='form__formContainer'>
				<Input inputName={'Name'} />
				<Input inputName={'Email'} />
				<textarea
					className='textarea'
					name=''
					id=''
					cols='15'
					rows='5'
					placeholder='Message'
				></textarea>
			</form>
			<Button classNameColor={'form__button'} buttonText={'Contact us'} />
		</div>
	);
};

export default ContactForm;
