import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

import { api } from '../../services/api';

import SvgLogo from '../../components/Icons/logo';
import { signInStyles } from './styles';
import { useThemeObject } from '../../hooks/theme.hook';
import { useThemeContext } from '../../contexts/ThemeContext';
import { PURPLE_THEME_ID } from '../../global/colors/purple.theme';
import { BLUE_THEME_ID } from '../../global/colors/blue.theme';
import { GRAY_THEME_ID } from '../../global/colors/gray.theme';

const showAlert = (title: string, body: string) =>
  Alert.alert(title, body, [
    {
      text: 'Ok',
      style: 'default',
    },
  ]);

export function SignIn() {
  const navigation = useNavigation();

  const styles = useThemeObject(signInStyles);
  const { theme } = useThemeContext();

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

  return (
    <View style={[styles.container]}>
      <Spinner
        visible={isLoading}
        textContent="Carregando..."
        textStyle={styles.spinnerText}
      />
      <View style={styles.logoContainer}>
        <SvgLogo />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={text => setEmail(text)}
          placeholder="email@dominio.com"
          placeholderTextColor={theme.colors.secondary.main}
          defaultValue={email}
          autoCompleteType="email"
        />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          placeholder="Sua senha"
          placeholderTextColor={theme.colors.secondary.main}
          autoCompleteType="password"
          defaultValue={password}
          secureTextEntry={true}
        />
      </View>
      <RectButton
        style={styles.button}
        onPress={() => {
          submitLogin(email, password);
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>

      <Text style={styles.bottomMsg}>
        Não possui conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Registrar-se
        </Text>
      </Text>
    </View>
  );
}
