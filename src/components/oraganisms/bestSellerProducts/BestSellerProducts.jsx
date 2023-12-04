import './BestSellerProducts.scss';
import { CardProduct } from '../../index';
const BestSellerProducts = () => {
	return (
		<div className='best'>
            <h2 className='title--l'>Best Seller Products</h2>
			<div className='best__container'>
				<CardProduct />
			</div>
		</div>
	);
};

export default BestSellerProducts;
