import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import {AboutPage, HomePage} from '../pages/index'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children:[
			{path:'/', element: <HomePage/>},
			{path:'/about', element: <AboutPage/>}
		]
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router}/>;
};

export default AppRouter;
