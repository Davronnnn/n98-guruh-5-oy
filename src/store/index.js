import { combineReducers, createStore } from 'redux';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const UPDATE = 'update';
export const ADD = 'add';
export const REMOVE = 'remove';

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
	} else if (action.type === REMOVE) {
		const result = state.filter((data) => {
			if (action.payload.id === data.id) {
				return false;
			}
			return true;
		});

		return result;
	} else if (action.type === UPDATE) {
		return action.payload;
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
