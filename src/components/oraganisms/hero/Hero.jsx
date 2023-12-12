import { useEffect, useState } from 'react';
import { BrandCollection, HeroControler, Img } from '../../index';
import './Hero.scss';
import carrouselData from '../../../data/CarrouselData.json'
const Hero = () => {
	const [slides, setSlides] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		setSlides(carrouselData)
	}, []);
	const handleSlide = index => {
		setCurrentSlide(index);
	};
	return (
		<div className='hero'>
			{slides.length > 0 && (
				<>
					<div className='hero__carrousel'>
						<Img className={`hero__img`} altImg={slides[currentSlide].imgUrl} />
						<BrandCollection
							className={'hero__brandCollection'}
							brandName={slides[currentSlide].brand}
						/>
					</div>
					<HeroControler
						onButtonClick={handleSlide}
						btnCount={slides.length}
						productName={slides[currentSlide].product}
						activeIndex={currentSlide}
					/>
				</>
			)}
		</div>
	);
};

export default Hero;
