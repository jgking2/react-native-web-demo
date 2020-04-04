import React, {useCallback} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const {navigate, setOptions} = useNavigation();
  const logout = useCallback(() => {
    navigate('Login');
  }, [navigate]);
  setOptions({
    headerRight: () => <Icon onPress={logout} name={'exit-to-app'} />,
  });
  return (
    <SafeAreaView>
      <Text>Home base</Text>
    </SafeAreaView>
  );
};
