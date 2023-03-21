import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './context/AuthContext';
import LanguageContextProvider from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<AuthContextProvider>
		<LanguageContextProvider>
			<App />
		</LanguageContextProvider>
	</AuthContextProvider>

	// </React.StrictMode>
);
