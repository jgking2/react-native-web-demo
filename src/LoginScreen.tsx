import React, {useCallback} from 'react';
import {SafeAreaView, Platform} from 'react-native';
import {Input, Button, SocialIcon, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const introText =
  Platform.OS === 'web'
    ? 'Thanks for using the internet?'
    : 'Greatest app on your phone!';

export const LoginScreen = () => {
  const {navigate} = useNavigation();
  const login = useCallback(() => {
    navigate('Home');
  }, [navigate]);
  return (
    <SafeAreaView>
      <Text h1>{introText}</Text>
      <Input placeholder={'Username'} placeholderTextColor={'black'} />
      <Input
        placeholder={'Password'}
        placeholderTextColor={'black'}
        secureTextEntry={true}
      />
      <Button onPress={login} title={'Login'} />
      <SocialIcon
        button
        type={'github'}
        onPress={login}
        title={'Login github'}
      />
    </SafeAreaView>
  );
};
