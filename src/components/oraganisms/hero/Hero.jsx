import { useEffect, useState } from 'react';
import { BrandCollection, HeroControler, Img } from '../../index';
import './Hero.scss';
const Hero = () => {
	const [slides, setSlides] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('src/data/CarrouselData.json');
				const data = await res.json();
				setSlides(data);
			} catch (error) {
				console.error('Error fetch Data');
			}
		};
		fetchData();
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
