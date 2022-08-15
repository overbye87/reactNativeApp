import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDCvVlvT_TeADaYDd-Kg7pYsLCOZzh9r6g',
  authDomain: 'react-native-chat-ac104.firebaseapp.com',
  projectId: 'react-native-chat-ac104',
  storageBucket: 'react-native-chat-ac104.appspot.com',
  messagingSenderId: '465417937203',
  appId: '1:465417937203:web:05c74688b52d4672891e46',
  measurementId: 'G-ZTTL8XX6GM',
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
