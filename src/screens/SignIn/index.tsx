import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/theme';
import { styles } from './styles';
import Icon from '../../../assets/icon_alt.png';


export function SignIn() {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.icon} />
      <View style={theme.input_wrapper}>
        <Text style={theme.input_label}>E-mail</Text>
        <TextInput
          style={theme.input}
          onChangeText={onChangeEmail}
          placeholder="email@dominio.com"
        />
        <Text style={theme.input_label}>Senha</Text>
        <TextInput
          style={theme.input}
          onChangeText={onChangePassword}
          placeholder=""
        />
      </View>
      <RectButton
        style={theme.button}
      >
          <Text style={theme.button_text}>Entrar</Text>
      </RectButton>
      <Text style={styles.bottomMsg}>
        Não possui conta? <Text style={styles.link}>Registrar-se</Text>
      </Text>
    </View>
  );
}
