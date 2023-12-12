import './FeaturesCard.scss';
import { Icon } from '../../index';
import FeaturesData from '../../../data/FeaturesData.json'
const FeaturesCard = () => {
	
	return (
		<>
			{FeaturesData.map(feature => (
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
