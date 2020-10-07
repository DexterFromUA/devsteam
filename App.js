/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import MainStackNavigation from './src/navigation/main';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <MainStackNavigation />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
