import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer} from './components/index';

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
