import { Navbar, Hero, Category } from '../../index';
import './HomeTemplate.scss';
const HomeTemplate = () => {
	return (
		<>
			<header className='Home__header'>
				<Navbar />
				<Hero />
			</header>
			<main>
				<section className='Home__section'>
					<Category/>
				</section>
			</main>
			<h1>Home</h1>
		</>
	);
};

export default HomeTemplate;
