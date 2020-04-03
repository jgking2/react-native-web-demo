import React, {useCallback} from 'react';
import {SafeAreaView, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const LoginScreen = () => {
  const {navigate} = useNavigation();
  const login = useCallback(() => {
    navigate('Home');
  }, [navigate]);
  return (
    <SafeAreaView>
      <TextInput placeholder={'Username'} placeholderTextColor={'black'} />
      <TextInput
        placeholder={'Password'}
        placeholderTextColor={'black'}
        secureTextEntry={true}
      />
      <Button onPress={login} title={'Login'} />
    </SafeAreaView>
  );
};
