import React from 'react';
import Routes from './src/Routes';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {hostApiServices} from './src/APIServices/hostApiServices';

const store = configureStore({
  reducer: {
    [hostApiServices.reducerPath]: hostApiServices.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(hostApiServices.middleware),
});

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
