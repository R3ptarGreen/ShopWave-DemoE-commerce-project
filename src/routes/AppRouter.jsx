import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import {AboutPage, HomePage, LoginPage} from '../pages/index'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children:[
			{path:'/', element: <HomePage/>},
			{path:'/about', element: <AboutPage/>},
			{path:'/login', element: <LoginPage/>}
		]
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router}/>;
};

export default AppRouter;
