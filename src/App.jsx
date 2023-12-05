import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Up } from './components/index';

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<Up/>
		</>
	);
}

export default App;
