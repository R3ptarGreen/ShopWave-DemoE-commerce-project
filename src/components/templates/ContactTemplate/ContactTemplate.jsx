import './ContactTemplate.scss'
import {Contact} from '../../index'
const ContactTemplate = () => {
  return (
    <main id='main' className='contact'>
        <Contact/>
        <div className='contact__rectangle'></div>
    </main>
  )
}

export default ContactTemplate