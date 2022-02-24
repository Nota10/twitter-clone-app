import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useThemeObject } from '../../hooks/theme.hook';
import DateTimePicker from '@react-native-community/datetimepicker';

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

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: new Date(),
  });

  const { theme } = useThemeContext();
  const styles = useThemeObject(signUpStyles);

  const submitForm = async () => {
    const newUser = { ...formData };
    delete newUser.confirmPassword;

    newUser.email = newUser.email.toLowerCase();
    newUser.username = newUser.username.toLowerCase();

    try {
      setIsLoading(true);
      const { data } = await api.post('/auth/register', newUser);
      showAlert('Success', 'Cadastro realizado com sucesso!');
    } catch (error) {
      const message =
        typeof error.response.data.message === 'string'
          ? error.response.data.message
          : error.response.data.message.join(' | ');
      showAlert('Erro', message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
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
          <Text style={styles.inputLabel}>Data de nascimento</Text>
          <RectButton onPress={() => setOpen(true)}>
            <Text style={styles.buttonDate}>
              {formData.birthday.toISOString().slice(0, 10)}
            </Text>
          </RectButton>
          {open && (
            <DateTimePicker
              testID="dateTimePicker"
              mode="date"
              display="default"
              value={formData.birthday}
              onChange={(e, date) => {
                setOpen(false);
                setFormData({ ...formData, birthday: date });
              }}
            />
          )}
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
            onChangeText={text =>
              setFormData({ ...formData, confirmPassword: text })
            }
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
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('SignIn')}
          >
            Entrar
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
