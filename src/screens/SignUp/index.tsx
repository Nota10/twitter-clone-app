import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useThemeObject } from '../../hooks/theme.hook';

import SvgLogo from '../../components/Icons/logo';
import { signUpStyles } from '../SignUp/styles';
import { theme } from '../../global/theme';
import { useThemeContext } from '../../contexts/ThemeContext';
import { api } from '../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';

const showAlert = (title: string, body: string) =>
  Alert.alert(title, body, [
  {
    text: 'Ok',
    style: 'default',
  },
]);
  
export function SignUp() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name:             '',
    username:         '',
    email:            '',
    password:         '',
    confirmPassword:  '',
    birthday:         '',
  });

  const { theme } = useThemeContext();
  const styles = useThemeObject(signUpStyles);

  const submitForm = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.post('/auth/register', formData);
    } catch (error) {
      console.log(error);
      showAlert('Erro', 'Houve um erro ao enviar as informações, tente novamenta mais tarde');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View
      style={[
        styles.container,
        // { backgroundColor: colors[`medium${context.theme}`] },
      ]}
    >
      <Spinner
        visible={isLoading}
        textContent="Carregando..."
        textStyle={styles.spinnerText}
      />
      <View style={styles.inputWrapper}>
        <Text style={styles.pageTitle}>Criar conta</Text>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({ ...formData, name: text })}
          placeholder="Maria da Silva"
          placeholderTextColor={theme.colors.secondary.light}
          autoCompleteType="name"
        />
        <Text style={styles.inputLabel}>Usuário</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({ ...formData, username: text })}
          placeholder="maah_silva"
          placeholderTextColor={theme.colors.secondary.light}
          autoCompleteType="username"
        />
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({ ...formData, email: text })}
          placeholder="email@dominio.com"
          placeholderTextColor={theme.colors.secondary.light}
          autoCompleteType="email"
        />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({ ...formData, password: text })}
          placeholder=""
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <Text style={styles.inputLabel}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({ ...formData, confirmPassword: text })}
          placeholder=""
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>
      <RectButton style={styles.button} onPress={() => submitForm()}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </RectButton>
      <Text style={styles.bottomMsg}>
        Já possuí conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}
