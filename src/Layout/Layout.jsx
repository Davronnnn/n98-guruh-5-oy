import React from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const Layout = ({ children }) => {
	return (
		<>
		
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
