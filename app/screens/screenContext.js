import { createContext } from 'react';

const ViewModeContext = createContext({
    lightMode: true,
    toggleViewMode: () => {}
});

export default ViewModeContext;