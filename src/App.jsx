import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PlatformRoute from './components/PlatformRoute';

function App() {
  return (
    <Provider store={store}>
      <PlatformRoute />
    </Provider>
  );
}

export default App;