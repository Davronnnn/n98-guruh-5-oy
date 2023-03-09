import rasm from './image.jpg';
import './app.scss';

function App() {
	const name = 'John';

	return (
		<div className='container'>
			
			<h2>{name}</h2>
			<p
				style={{
					color: 'blue',
					backgroundColor: 'red',
					backgroundImage: `url(${rasm})`,
				}}>
				{12 + 24}
			</p>
			<p></p>

			<label htmlFor='name'>
				<input type='text' name='' id='name' />
			</label>
		</div>
	);
}

export default App;
