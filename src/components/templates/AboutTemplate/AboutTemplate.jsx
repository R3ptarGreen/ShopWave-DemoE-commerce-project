import { AboutSections, Up } from '../../index';
import './AboutTemplate.scss';
const AboutTemplate = () => {
	return (
		<>
			<main className='main'>
				<section className='about'>
					<AboutSections />
				</section>
			</main>
			<Up />
		</>
	);
};

export default AboutTemplate;
