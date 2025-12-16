
import React, { createContext, useState } from 'react';

export const GeneralContext = createContext(null);

export const GeneralContextProvider = ({ children }) => {
	const [state, setState] = useState({});

	const value = { state, setState };

	return (
		<GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
	);
};

export default GeneralContextProvider;
