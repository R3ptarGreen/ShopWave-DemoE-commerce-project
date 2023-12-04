import { Navbar, Hero, Category, Features, Offer } from '../../index';
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
				<section>
					<Offer 
						  discount={'15% OFF'}
						  discountColor={'primary'}
						  title={"Only For You"}
						  subtitle={"This Black Friday"}
						  save={"15%"}
						  textColor={"text"}
						  bgColor={"bgSecondary"}
						  img={"offerOne"}
					/>
				</section>
			</main>
			<h1>Home</h1>
		</>
	);
};

export default HomeTemplate;
