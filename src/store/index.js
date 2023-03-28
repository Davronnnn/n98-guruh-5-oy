import { combineReducers, createStore } from 'redux';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const UPDATE = 'update';
export const ADD = 'add';

const counterReducer = (state = 20, action) => {
	if (action.type === INCREMENT) {
		return state + 1;
	} else if (action.type === DECREMENT) {
		return state - 1;
	} else if (action.type === UPDATE) {
		return action.payload;
	}
	return state;
};

const favoriteReducer = (state = [], action) => {
	if (action.type === ADD) {
		const newArray = [...state, action.payload];

		return newArray;
	}
	return state;
};

const combineReducer = combineReducers({
	counter: counterReducer,
	favorites: favoriteReducer,
});

export const store = createStore(
	combineReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
