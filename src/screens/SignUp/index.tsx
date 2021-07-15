import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../global/colors';

import SvgLogo from '../../components/Icons/logo';
import { signInStyles } from '../SignIn/styles';

export function SignUp() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <View style={signInStyles.container}>
      <View style={signInStyles.logoContainer}>
        <SvgLogo />
      </View>
      <View style={signInStyles.inputWrapper}>
        <Text style={signInStyles.inputLabel}>E-mail</Text>
        <TextInput
          style={signInStyles.input}
          onChangeText={text => setFormData({ ...formData, email: text })}
          placeholder="email@dominio.com"
          placeholderTextColor={colors.secondary}
          autoCompleteType="email"
        />
        <Text style={signInStyles.inputLabel}>Senha</Text>
        <TextInput
          style={signInStyles.input}
          onChangeText={text => setFormData({ ...formData, password: text })}
          placeholder=""
          placeholderTextColor={colors.secondary}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <Text style={signInStyles.inputLabel}>Confirmar Senha</Text>
        <TextInput
          style={signInStyles.input}
          onChangeText={text =>
            setFormData({ ...formData, confirmPassword: text })
          }
          placeholder=""
          placeholderTextColor={colors.secondary}
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>
      <RectButton style={signInStyles.button}>
        <Text style={signInStyles.buttonText}>Criar conta</Text>
      </RectButton>
      <Text style={signInStyles.bottomMsg}>
        Já possuí conta?{' '}
        <Text
          style={signInStyles.link}
          onPress={() => navigation.navigate('SignIn')}
        >
          Entrar
        </Text>
      </Text>
    </View>
  );
}
