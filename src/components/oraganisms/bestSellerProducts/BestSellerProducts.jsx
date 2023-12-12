import './BestSellerProducts.scss';
import { CardProduct } from '../../index';
import { useState, useEffect } from 'react';
const BestSellerProducts = () => {
	const [cardData, setCardData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('src/data/ProductData.json');
				const jsonData = await res.json();
				const data = jsonData.productData;
				setCardData(data);
			} catch (error) {
				console.error('Error Fetching Data', error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='best'>
			<h2 className='title--l'>Best Seller Products</h2>
			<div className='best__container'>
				{cardData.map((item, index) => (
					<CardProduct
						key={index}
						brand={item.brand}
						price={item.price}
						img={item.activeColor[0].img}
						product={item.product}
						activeColor={item.activeColor}
						id={item.id}
					/>
				))}
			</div>
		</div>
	);
};

export default BestSellerProducts;
