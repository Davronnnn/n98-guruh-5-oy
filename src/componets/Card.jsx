const Card = ({ product }) => {
	return (
		<div className='col-3'>
			<div className='card shadow p-3'>
				<div className='card-body text-center'>
					<img src={product.image} alt={product.name} />
					<h5 className='card-title'>{product.name}</h5>
					<p className='card-text'>{product.body}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
