import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Formik } from 'formik';

import { api } from '../../services/api';

import SvgLogo from '../../components/Icons/logo';
import { signInStyles } from './styles';
import { useThemeObject } from '../../hooks/theme.hook';
import { useThemeContext } from '../../contexts/ThemeContext';

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

  // const [email, setEmail] = useState('hey@email.com');
  // const [password, setPassword] = useState('123123');

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
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = (password: string) => {
    if (password.length >= 6) {
      return true;
    }
    return false;
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
        <Formik
          // valores iniciais setados para teste
          initialValues={{ email: 'hey@email.com', password: '123123' }}
          onSubmit={values => {
            // console.log(values);
            if (!validateEmail(values.email)) {
              showAlert(
                'E-mail inválido',
                'Este não e um endereço de e-mail válido'
              );
            } else if (!validatePassword(values.password)) {
              showAlert(
                'Senha inválida',
                'A senha precisa ter mais que 6 caracteres'
              );
            } else {
              submitLogin(values.email, values.password);
            }
          }}
        >
          {props => (
            <View>
              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                placeholder="email@dominio.com"
                placeholderTextColor={theme.colors.secondary.light}
                autoCompleteType="email"
                autoCapitalize="none"
              />
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                placeholder="Sua senha"
                placeholderTextColor={theme.colors.secondary.light}
                autoCompleteType="password"
                secureTextEntry={true}
              />
              <RectButton style={styles.button} onPress={props.handleSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
              </RectButton>
            </View>
          )}
        </Formik>
      </View>

      <Text style={styles.bottomMsg}>
        Não possui conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Registrar-se
        </Text>
      </Text>
    </View>
  );
}
