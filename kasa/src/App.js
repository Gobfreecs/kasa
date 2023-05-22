import About from './pages/about/About';
import Home from './pages/home/Home';
import Accomodation from './pages/accomodation/Accomodation';
import NotFound from './pages/notFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},

	{
		path: "/about",
		element: <About />
	},

	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: "*",
		element: <NotFound />
	},
]);

function App() {

	return (
		<>
			<RouterProvider router={router} />
		</>

	)
}

export default App