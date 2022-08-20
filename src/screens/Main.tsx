import React from 'react';
import {
  Alert, Button, Text, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { NavigationAppStack } from '../navigation/AppNavigation';
import { styles } from './Main.styles';

const Main: React.FC = () => {
  const { navigate } = useNavigation<NavigationAppStack<'Main'>>();

  const hello = () => {
    console.log('>>> hello');
    Alert.alert('Hello', 'OK');
  };

  const googleHandler = async () => {
    // provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      Alert.alert('token', token);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const { email } = error;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // Alert.alert(errorCode, errorMessage);
      console.log(error);
    }
  };

  return (
    <View style={styles.сontainer}>
      <Text>This is Main Page</Text>
      <Button title="CHAT PAGE" onPress={() => navigate('Chat')} />
      <Button title="LOGIN" onPress={googleHandler} />
      <Button title="HELLO" onPress={hello} />
    </View>
  );
};

export default Main;
