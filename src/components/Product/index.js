import { useNavigate } from 'react-router-dom';
import './style.css';

const Product = (props) => {
	const navigate = useNavigate();
	const product = props.product;

	const handleProductInfo = (idProduct) => {
		return navigate(`/product/${idProduct}`);
	};
	return (
		<div
			className="flex-col p-2"
			style={{
				justifyItems: 'center',
				alignItems: 'center',
				width: '33%',
			}}
		>
			<li
				key={product.id}
				className="flex-col"
				style={{
					marginBottom: '2rem',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '300px',
						paddingBottom: '.5rem',
					}}
				>
					<img
						alt={`${product.name}`}
						src={`${product.image}`}
						className="w-full h-full box-product "
						style={{ borderRadius: '10%' }}
					/>
				</div>
				<h1
					className="w-full"
					style={{
						marginLeft: '5px',
						marginRight: '5px',
						paddingBottom: '.25rem',
					}}
				>
					{product.name}
				</h1>
				<h2
					className="w-full"
					style={{
						marginLeft: '5px',
						marginRight: '5px',
						fontWeight: '600',
						paddingBottom: '.8rem',
					}}
				>{`R$ ${product.price}`}</h2>
				<button
					name={product.id}
					className="flex w-full justify-center items-center box-product"
					style={{
						borderRadius: '10px',
						marginLeft: '5px',
						marginRight: '5px',
						height: '2.3rem',
					}}
					onClick={(e) => handleProductInfo(e.target.name)}
				>
					Comprar
				</button>
			</li>
		</div>
	);
};

export default Product;
