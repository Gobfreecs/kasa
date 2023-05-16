import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
]);

function App() {

  return (
<>
			<RouterProvider router={router}/>
		</>

  )
}

export default App