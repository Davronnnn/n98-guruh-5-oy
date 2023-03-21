import { createContext, useState } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
	const [languageType, setLanguageType] = useState(
		localStorage.getItem('lang') ? localStorage.getItem('lang') : 'uz'
	);

	return (
		<LanguageContext.Provider
			value={{
				languageType,
				setLanguageType,
			}}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
