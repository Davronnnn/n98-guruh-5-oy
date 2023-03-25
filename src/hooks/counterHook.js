import { useState } from 'react';

const useCounter = () => {
	const [counter, setCounter] = useState(0);

	return [counter,setCounter];
};

export default useCounter;
