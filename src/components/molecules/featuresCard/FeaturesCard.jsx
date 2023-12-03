import './FeaturesCard.scss';
import { Icon } from '../../index';
import { useState, useEffect } from 'react';

const FeaturesCard = () => {
	const [featuresData, setFeaturesData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('src/data/FeaturesData.json');
				const jsonData = await res.json();
				const data = jsonData.featuresData;
				setFeaturesData(data);
			} catch (error) {
				console.error('Error to connect data', error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			{featuresData.map(feature => (
				<div className='features__card' key={feature.alt}>
					<Icon altIcon={feature.alt} />
					<div>
						<h2 className='features__text text--m'>{feature.title}</h2>
						<p className='features__text text--m'>{feature.description}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default FeaturesCard;
