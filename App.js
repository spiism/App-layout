import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import AppContainer from './src/modules/app/AppContainer';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <ActivityIndicator color="#f00" />
            </View>
          }
        persistor={persistor}
      >
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
