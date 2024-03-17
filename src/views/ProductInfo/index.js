import { useParams } from 'react-router-dom';
import products from '../../assets/products.json';
import Header from '../../components/Header';

const ProductInfo = () => {
	const { id } = useParams();

	const product = products.find((product) => product.id === id);

	const handleShop = () => {
		return window.open(`${product.shopLink}`, '_blank');
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<Header />
			<div
				style={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div className="product-img flex h-full w-1/2 items-center justify-end">
					<img
						alt={`${product.name}`}
						src={`${product.image}`}
						className="box-product"
						style={{
							borderRadius: '10%',
							height: '70%',
							width: '70%',
						}}
					/>
				</div>
				<div className="flex w-1/2 h-full items-center justify-center">
					<div
						className="flex-column "
						style={{ width: '80%', height: '80%' }}
					>
						<h1
							className="flex w-full justify-start"
							style={{ fontSize: '1.5rem', paddingTop: '2rem' }}
						>
							{product.name}
						</h1>
						<h2
							className="flex w-full justify-start"
							style={{
								fontWeight: '600',
								fontSize: '1.3rem',
								paddingTop: '1rem',
							}}
						>
							{`R$ ${product.price}`}
						</h2>

						<div
							className="w-full justify-start items-center flex"
							style={{ paddingTop: '2rem' }}
						>
							<button
								className="flex justify-center items-center box-product"
								style={{
									borderRadius: '10px',
									marginLeft: '5px',
									marginRight: '5px',
									height: '2.3rem',
									width: '90%',
								}}
								onClick={() => handleShop()}
							>
								Comprar Mercado Livre
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
