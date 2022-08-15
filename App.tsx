import React, {createContext} from 'react';
import {Provider} from 'react-redux';

import AppNavigation from './src/navigation/AppNavigation';
import {store} from './src/store/store';
import {firebaseApp, auth, firestore} from './src/firebase';
import {FirebaseApp} from 'firebase/app';
import {Auth} from 'firebase/auth';
import {Firestore} from 'firebase/firestore';

interface IFirebaseContext {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

export const FirebaseContext = createContext<IFirebaseContext | null>(null);

const App = () => {
  return (
    <FirebaseContext.Provider
      value={{
        firebaseApp,
        auth,
        firestore,
      }}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </FirebaseContext.Provider>
  );
};

export default App;
