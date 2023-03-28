import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<ThemeContextProvider>
		<AuthContextProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</AuthContextProvider>
	</ThemeContextProvider>

	// </React.StrictMode>
);
