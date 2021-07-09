import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { SignInButton } from '../../components/SignInButton';
import { styles } from './styles';
import Icon from '../../../assets/icon_alt.png';
import { theme } from '../../global/theme';


export function Welcome({ navigation }) {
  const textoEntrada = 'Veja o que está acontecendo no mundo neste momento.';

  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.icon} />
      <Text style={theme.lead_text}>{textoEntrada}</Text>
      <RectButton
        style={theme.button} 
        onPress={() => navigation.navigate('SignIn')}>
          <Text style={theme.button_text}>Criar conta</Text>
      </RectButton>
      <Text style={styles.bottomMsg}>
        Já tem uma conta? <Text style={styles.link}>Entrar</Text>
      </Text>
    </View>
  );
}
