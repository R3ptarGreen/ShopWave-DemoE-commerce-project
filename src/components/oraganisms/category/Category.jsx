import './Category.scss';
import { CardCategory } from '../../index';
import categoryData from '../../../data/CardDataCategory.json'
const Category = () => {
	return (
		<div className='category__container'>
			{categoryData.map(prop => (
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
