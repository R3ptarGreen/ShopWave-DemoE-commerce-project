import { createBrowserRouter, RouterProvider, useLocation} from 'react-router-dom';
import App from '../App';
import {AboutPage, HomePage, LoginPage, ContactPage, CoomingSoonPage} from '../pages/index'
import { useEffect } from 'react';

const ScrollToTop = () => {
	const {pathname} = useLocation()
	useEffect(() => {
		window.scrollTo(0,0)
	},[pathname])
}
const router = createBrowserRouter([
		{
		path: '/',
		element:(
			<>
				<App />
				<ScrollToTop/>
			</>
		),
		children:[
			{path:'/', element: <HomePage/>},
			{path:'/about', element: <AboutPage/>},
			{path:'/login', element: <LoginPage/>},
			{path:'/contact', element: <ContactPage/>},
			]
		},
	{path: '/shop', element: <CoomingSoonPage/>},
	{path: '/pay', element: <CoomingSoonPage/>}
	])

const AppRouter = () => {

	return <RouterProvider router={router}/>;
};

export default AppRouter;
