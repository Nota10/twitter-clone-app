import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { theme } from '../../global/theme';
import SvgLogo from '../../components/Icons/logo';


export function Welcome({ navigation }) {
  const textoEntrada = 'Veja o que está acontecendo no mundo neste momento.';

  return (
    <View style={theme.container}>
      <View style={{
        width: 65,
        height: 80,
        alignItems: 'center',
        marginTop: 125
      }}
      >
        <SvgLogo />
      </View>
      <Text style={theme.lead_text}>{textoEntrada}</Text>
      <RectButton
        style={theme.button}
        onPress={() => navigation.navigate('SignUp')}>
          <Text style={theme.button_text}>Criar conta</Text>
      </RectButton>
      <Text style={theme.bottomMsg}>
        Já tem uma conta? <Text style={theme.link} onPress={() => navigation.navigate('SignIn')}>Entrar</Text>
      </Text>
    </View>
  );
}
