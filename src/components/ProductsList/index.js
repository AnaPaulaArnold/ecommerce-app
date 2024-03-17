import products from '../../assets/products.json';
import Product from '../Product';

const ProductsList = () => {
	const mapProducts = () => {
		return products.map((product) => {
			return <Product product={product} />;
		});
	};
	return (
		<div className="flex m-auto" style={{ width: '70%' }}>
			<ul
				className="flex w-full h-screen justify-center"
				style={{
					flexWrap: 'wrap',
				}}
			>
				{mapProducts()}
			</ul>
		</div>
	);
};

export default ProductsList;
