import bannerImg from '../../assets/banner/banner.jpg';

const Banner = () => {
	return (
		<div
			className="banner"
			style={{
				width: '100%',
				height: '60vh',
				opacity: '90%',
			}}
		>
			<img
				alt="banner renegade"
				src={bannerImg}
				style={{ width: '100%', height: '100%', objectFit: 'cover' }}
			/>

			<div
				style={{
					color: 'white',
					fontSize: '30px',
					fontWeight: '700',
				}}
			>
				<span
					style={{
						position: 'absolute',
						top: '180px',
						left: '150px',
						background: 'transparent',
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
					}}
				>
					Seu carro merece o melhor
				</span>
			</div>
		</div>
	);
};

export default Banner;
