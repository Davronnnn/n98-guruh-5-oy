const Card = ({ post, isFive }) => {
	let result = '';

	if (isFive) {
		result = <p className='text-primary'>{post.id}</p>;
	}

	return (
		<div className='col-3'>
			<div className='card'>
				<div className='card-body'>
					{result}
					<h5 className='card-title'>{post.title}</h5>
					<p className='card-text'>{post.body}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
