import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { Alert } from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyDCvVlvT_TeADaYDd-Kg7pYsLCOZzh9r6g',
  authDomain: 'react-native-chat-ac104.firebaseapp.com',
  projectId: 'react-native-chat-ac104',
  storageBucket: 'react-native-chat-ac104.appspot.com',
  messagingSenderId: '465417937203',
  appId: '1:465417937203:web:05c74688b52d4672891e46',
  measurementId: 'G-ZTTL8XX6GM',
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
Alert.alert('auth', JSON.stringify(auth, null, 2));
export const firestore = getFirestore(firebaseApp);
export const provider = new GoogleAuthProvider();
