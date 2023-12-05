import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import {AboutPage, HomePage, LoginPage, ContactPage} from '../pages/index'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children:[
			{path:'/', element: <HomePage/>},
			{path:'/about', element: <AboutPage/>},
			{path:'/login', element: <LoginPage/>},
			{path:'/contact', element: <ContactPage/>}
		]
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router}/>;
};

export default AppRouter;
