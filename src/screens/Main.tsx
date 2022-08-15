import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {FirebaseContext} from '../../App';
import {NavigationAppStack} from '../navigation/AppNavigation';
import {styles} from './Main.styles';

const Main: React.FC = () => {
  const {firebaseApp, auth} = useContext(FirebaseContext);
  const {navigate} = useNavigation<NavigationAppStack<'Main'>>();

  const login = () => {
    console.log('>>> login');
    firebaseApp
  };
  return (
    <View style={styles.сontainer}>
      <Text>This is Main Page</Text>
      <Button title={'CHAT PAGE'} onPress={() => navigate('Chat')} />
    </View>
  );
};

export default Main;
