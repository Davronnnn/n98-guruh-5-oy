import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	
	return (
		<AuthContext.Provider
			value={{
				isLogin,
				setIsLogin,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
