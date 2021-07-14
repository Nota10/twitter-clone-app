import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/theme';
import COLORS from '../../global/colors';

import SvgLogo from '../../components/Icons/logo';


export function SignUp({ navigation }) {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={ { ...theme.container, flex: 1 } }>
      <View style={{
        width: 65,
        height: 80,
        alignItems: 'center',
        marginTop: 125
      }}
      >
        <SvgLogo />
      </View>
      <View style={theme.input_wrapper}>
        <Text style={theme.input_label}>E-mail</Text>
        <TextInput
          style={theme.input}
          onChangeText={onChangeEmail}
          placeholder="email@dominio.com"
          placeholderTextColor={COLORS.secondary}
          autoCompleteType="email"
        />
        <Text style={theme.input_label}>Senha</Text>
        <TextInput
          style={theme.input}
          onChangeText={onChangePassword}
          placeholder=""
          placeholderTextColor={COLORS.secondary}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <Text style={theme.input_label}>Confirmar Senha</Text>
        <TextInput
          style={theme.input}
          onChangeText={onChangePassword}
          placeholder=""
          placeholderTextColor={COLORS.secondary}
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>
      <RectButton
        style={theme.button}
      >
          <Text style={theme.button_text}>Criar conta</Text>
      </RectButton>
      <Text style={theme.bottomMsg}>
        Já possuí conta? <Text style={theme.link} onPress={() => navigation.navigate('SignIn')}>Entrar</Text>
      </Text>
    </View>
  );
}
