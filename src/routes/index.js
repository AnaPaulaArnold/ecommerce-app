import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from '../views/Catalog';
import ProductInfo from '../views/ProductInfo';

const AllRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Catalog />} />
				<Route path="/product/:id" element={<ProductInfo />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AllRoutes;
