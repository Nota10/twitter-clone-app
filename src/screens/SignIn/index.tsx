import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

import { api } from '../../services/api';

import { colors } from '../../global/colors';

import SvgLogo from '../../components/Icons/logo';
import { signInStyles } from './styles';
import { ThemeContext } from '../../utils/ThemeHandler';

const showAlert = (title: string, body: string) =>
  Alert.alert(title, body, [
    {
      text: 'Ok',
      style: 'default',
    },
  ]);

export function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('hey@email.com');
  const [password, setPassword] = useState('123123');

  const [isLoading, setIsLoading] = useState(false);

  const submitLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { data } = await api.post('/auth/login', { email, password });
      console.log('data: ', data);

      navigation.navigate('Main');
    } catch (error) {
      showAlert('Dados incorretos', 'Verifique novamente');
    } finally {
      setIsLoading(true);
    }
  };

  const context = useContext(ThemeContext);

  return (
    <View
      style={[
        signInStyles.container,
        { backgroundColor: colors[`medium${context.theme}`] },
      ]}
    >
      <Spinner
        visible={isLoading}
        textContent="Carregando..."
        textStyle={signInStyles.spinnerText}
      />
      <View style={signInStyles.logoContainer}>
        <SvgLogo />
      </View>
      <View style={signInStyles.inputWrapper}>
        <Text style={signInStyles.inputLabel}>E-mail</Text>
        <TextInput
          style={[
            signInStyles.input,
            { borderColor: colors[`light${context.theme}`] },
          ]}
          onChangeText={text => setEmail(text)}
          placeholder="email@dominio.com"
          placeholderTextColor={colors.secondary}
          defaultValue={email}
          autoCompleteType="email"
        />
        <Text style={signInStyles.inputLabel}>Senha</Text>
        <TextInput
          style={[
            signInStyles.input,
            { borderColor: colors[`light${context.theme}`] },
          ]}
          onChangeText={text => setPassword(text)}
          placeholder="Sua senha"
          placeholderTextColor={colors.secondary}
          autoCompleteType="password"
          defaultValue={password}
          secureTextEntry={true}
        />
      </View>
      <RectButton
        style={signInStyles.button}
        onPress={() => {
          submitLogin(email, password);
        }}
      >
        <Text style={signInStyles.buttonText}>Entrar</Text>
      </RectButton>
      <Text style={signInStyles.bottomMsg}>
        Não possui conta?{' '}
        <Text
          style={signInStyles.link}
          onPress={() => navigation.navigate('SignUp')}
        >
          Registrar-se
        </Text>
      </Text>
    </View>
  );
}
