import React from 'react';

const Test = ({ counter }) => {
	
	return <div>Test {counter}</div>;
};

export default React.memo(Test);
