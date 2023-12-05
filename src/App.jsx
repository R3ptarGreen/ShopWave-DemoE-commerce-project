import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Icon } from './components/index';
function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<a href="" className='up'><Icon className={'up__icon'} altIcon={'upIcon'}/></a>
		</>
	);
}

export default App;
