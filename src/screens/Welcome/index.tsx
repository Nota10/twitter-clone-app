import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import SvgLogo from '../../components/Icons/logo';
import { useNavigation } from '@react-navigation/native';
import { signInStyles } from '../SignIn/styles';
import { welcomeStyles } from './styles';

export function Welcome() {
  const navigation = useNavigation();
  const textoEntrada = 'Veja o que está acontecendo no mundo neste momento.';

  return (
    <View style={signInStyles.container}>
      <View style={signInStyles.logoContainer}>
        <SvgLogo />
      </View>
      <Text style={welcomeStyles.leadText}>{textoEntrada}</Text>
      <RectButton
        style={signInStyles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={signInStyles.buttonText}>Criar conta</Text>
      </RectButton>
      <Text style={signInStyles.bottomMsg}>
        Já tem uma conta?{' '}
        <Text
          style={signInStyles.link}
          onPress={() => navigation.navigate('SignIn')}
        >
          Entrar
        </Text>
      </Text>
    </View>
  );
}
