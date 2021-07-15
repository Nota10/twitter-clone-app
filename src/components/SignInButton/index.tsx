import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function SignInButton() {
  const navigation = useNavigation();
  return (
    <RectButton
      style={styles.container}
      onPress={() => navigation.navigate('SignIn')}
    >
      <Text style={styles.text}>Criar conta</Text>
    </RectButton>
  );
}
