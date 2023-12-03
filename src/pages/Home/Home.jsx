import { NavbarTemplate, HeroTemplate } from '../../components/index';
import './Home.scss'
const Home = () => {
	return (
		<>
			<header className='Home__header'>
				<NavbarTemplate />
				<HeroTemplate />
			</header>
			<h1>Home</h1>
		</>
	);
};

export default Home;
