import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer} from './components/index';
import {DataProvider} from './hooks/index'
function App() {
	return (
		<>
		<DataProvider>
			<Navbar />
			<Outlet />
			<Footer />
		</DataProvider>
		</>
	);
}

export default App;
