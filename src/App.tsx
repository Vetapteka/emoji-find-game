import React, { JSX } from 'react';
import { AppStore, setupStore } from './store/store';
import { Provider } from 'react-redux';
import ViewProvider from './ViewProvider';
// import { getSounds, SoundsContext } from './hooks/soundManager/SoundContext';

export const store: AppStore = setupStore();

function App(): JSX.Element {

	return (
		// <SoundsContext.Provider value={getSounds()}>
			<Provider store={store}>
				<ViewProvider/>
			</Provider>
		// </SoundsContext.Provider>);
}

export default App;