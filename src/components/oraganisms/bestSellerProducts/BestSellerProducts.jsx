import './BestSellerProducts.scss';
import { CardProduct } from '../../index';
import productData from '../../../data/ProductData.json'
const BestSellerProducts = () => {


	return (
		<div className='best'>
			<h2 className='title--l'>Best Seller Products</h2>
			<div className='best__container'>
				{productData.map((item, index) => (
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
