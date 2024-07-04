import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const MainApp: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BottomTabNavigator />
      </PersistGate>
    </Provider>
  );
};

export default MainApp;
