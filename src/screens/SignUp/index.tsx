import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useThemeObject } from '../../hooks/theme.hook';

import SvgLogo from '../../components/Icons/logo';
import { signUpStyles } from '../SignUp/styles';
import { theme } from '../../global/theme';
import { useThemeContext } from '../../contexts/ThemeContext';

export function SignUp() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { theme } = useThemeContext();
  const styles = useThemeObject(signUpStyles);

  return (
    <View
      style={[
        styles.container,
        // { backgroundColor: colors[`medium${context.theme}`] },
      ]}
    >
      <View style={styles.logoContainer}>
        <SvgLogo />
      </View>
      <View style={styles.inputWrapper}>
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
          onChangeText={text =>
            setFormData({ ...formData, confirmPassword: text })
          }
          placeholder=""
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>
      <RectButton style={styles.button}>
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
