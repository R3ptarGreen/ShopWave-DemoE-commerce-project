import './Brand.scss';
import {Link} from 'react-router-dom'
const Brand = () => {
	return (
		<div className='navbar__brandContainer'>
			<Link to={'/'}>
				<h1 className='navbar__brandText title--xl'>ShopWave</h1>
			</Link>
		</div>
	);
};

export default Brand;
