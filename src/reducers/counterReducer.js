const counterReducer = (state, action) => {
	switch (action.type) {
		case 'increase':
			return state + 1;
		case 'decrease':
			return state - 1;
		case 'update':
			return action.payload;
		default:
			return state;
	}
};
export default  counterReducer