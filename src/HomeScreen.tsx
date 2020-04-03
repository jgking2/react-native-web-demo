import React, {useCallback} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const {navigate} = useNavigation();
  const logout = useCallback(() => {
    navigate('Login');
  }, [navigate]);
  return (
    <SafeAreaView>
      <Text>Home base</Text>
      <Button onPress={logout} title={'Logout'} />
    </SafeAreaView>
  );
};
