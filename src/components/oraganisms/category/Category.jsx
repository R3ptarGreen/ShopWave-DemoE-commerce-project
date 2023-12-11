import './Category.scss';
import { CardCategory } from '../../index';
import { useState, useEffect } from 'react';

const Category = () => {
	const [cardInfo, setCardInfo] = useState([]);

	useEffect(() => {
		const fecthData = async () => {
			try {
				const res = await fetch('src/data/CardDataCategory.json');
				const jsonData = await res.json();
				const data = jsonData.cardData;
				setCardInfo(data);
			} catch (error) {
				console.error('Error to load data', error);
			}
		};
		fecthData();
	}, []);
	return (
		<div className='category__container'>
			{cardInfo.map(prop => (
				<CardCategory
					key={prop.category}
					altImg={prop.alt}
					categoryName={prop.category}
				/>
			))}
		</div>
	);
};

export default Category;
