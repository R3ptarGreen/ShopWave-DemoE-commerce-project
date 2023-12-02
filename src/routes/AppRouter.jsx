import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import {Home} from '../pages/index'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children:[
			{path:'/', element: <Home/>}
		]
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router}/>;
};

export default AppRouter;
