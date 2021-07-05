import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SignInButton } from '../../components/sign-in-button';
import { styles } from './styles';
import Icon from '../../../assets/icon_alt.png';

const textoEntrada = 'Veja o que está acontecendo no mundo neste momento.';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.icon} />
      <Text style={styles.text}>{textoEntrada}</Text>
      <SignInButton />
      <Text style={styles.bottomMsg}>
        Já tem uma conta? <Text style={styles.link}>Entrar</Text>
      </Text>
    </View>
  );
}
