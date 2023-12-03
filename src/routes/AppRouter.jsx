import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import {HomePage} from '../pages/index'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children:[
			{path:'/', element: <HomePage/>}
		]
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router}/>;
};

export default AppRouter;
