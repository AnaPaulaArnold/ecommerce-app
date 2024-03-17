import Banner from '../../components/Banner';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import ProductsList from '../../components/ProductsList';

const Catalog = () => {
	return (
		<div className="w-full h-full flex-column items-center">
			<Header />
			<Banner />
			<PageTitle />
			<ProductsList />
		</div>
	);
};

export default Catalog;
