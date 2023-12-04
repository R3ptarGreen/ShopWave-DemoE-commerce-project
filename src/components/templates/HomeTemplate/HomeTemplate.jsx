import { Hero, Category, Features, Offer, BestSellerProducts } from '../../index';
import './HomeTemplate.scss';
const HomeTemplate = () => {
	return (
		<>
			<header className='Home__header'>
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
						  save={"15% in Running"}
						  textColor={"text"}
						  bgColor={"bgSecondary"}
						  img={"offerOne"}
					/>
				</section>
				<section>
					<BestSellerProducts/>
				</section>
				<section>
					<Offer
						 discount= {"35% OFF"}
						 discountColor= {"secondary"}
						 title= {"Happy Hours!"}
						 subtitle= {"In the next 3 hours"}
						 save= {"35% in Classics"}
						 textColor={"bg"}
						 bgColor={"bgAccent"}
						 img={"offerTwo"}
					/>
				</section>
			</main>
		</>
	);
};

export default HomeTemplate;
