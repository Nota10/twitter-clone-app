import React from 'react';
import { View, Text } from 'react-native';
import { SignInButton } from '../../components/sign-in-button';

import { styles } from './styles';

const textoEntrada = 'Veja o que está acontecendo no mundo neste momento.';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textoEntrada}</Text>
      <SignInButton />
    </View>
  );
}
