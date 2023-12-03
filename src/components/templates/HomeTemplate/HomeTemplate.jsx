import { Navbar, Hero, Category, Features } from '../../index';
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
					<Category />
				</section>
				<section className='Home__section'>
					<Features />
				</section>
			</main>
			<h1>Home</h1>
		</>
	);
};

export default HomeTemplate;
