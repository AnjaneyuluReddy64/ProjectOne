import React from 'react';
import Routes from './src/Routes';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {hostApiServices} from './src/APIServices/hostApiServices';
import {FontProvider, ThemeProvider} from './src/Utils/Globals';
import {Text, View} from 'react-native';
import Cards from './src/Screens/Project/Cards';

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
      <ThemeProvider>
        <FontProvider>
          <Routes />
        </FontProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
