import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Layout from 'App/containers/layout';
import Home from 'App/containers/home';
import EditDocument from 'App/containers/edit-document';
import NotFound from 'App/containers/not-found';
import { ROUTE_HOME, ROUTE_DOCS, ROUTE_404 } from "Utils/routes";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTE_HOME} element={<Layout/>}>
					<Route index element={<Home/>} />
					<Route path={ROUTE_DOCS + '/:id'} element={<EditDocument/>} />
					<Route path={ROUTE_404} element={<NotFound/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;