import { useLocation, Link } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Logo from '../../assets/logo/autoentusiastadejeep.png';

const Header = () => {
	const location = useLocation();
	const [isProduct, setIsProduct] = useState(false);

	useEffect(() => {
		if (location.pathname.includes('product')) {
			setIsProduct(true);
		}
	}, [location.pathname]);

	return (
		<div
			className="header-shadow"
			style={{ height: '3rem', backgroundColor: 'black' }}
		>
			{isProduct && (
				<div
					style={{
						height: '100%',
						width: '3%',
						marginLeft: '1rem',
						alignItems: 'center',
						display: 'flex',
						justifyItems: 'center',
						backgroundColor: 'black',
					}}
				>
					<Link to="/">
						<FaArrowLeft
							style={{ backgroundColor: 'black' }}
							size={24}
							color="white"
						/>
					</Link>
				</div>
			)}
			<h1
				style={{
					position: 'absolute',
					top: '10px',
					left: '60px',
					fontWeight: '600',
					fontSize: '1.3rem',
					backgroundColor: 'black',
					color: 'white',
				}}
			>
				Loja Auto Entusiasta de Jeep
			</h1>

			<div
				style={{
					position: 'absolute',
					top: '0',
					right: '50px',
					width: '50px',
					height: '3rem',
					backgroundColor: 'transparent',
					padding: '3px',
				}}
			>
				<img
					style={{ borderRadius: '50%', padding: '2px' }}
					alt="logo Auto Entusiasta de Jeep"
					src={Logo}
				/>
			</div>
		</div>
	);
};

export default Header;
