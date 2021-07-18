import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// import { colors } from '../../global/colors';

import SvgLogo from '../../components/Icons/logo';
import { signInStyles } from '../SignUp/styles';
// import { ThemeContext } from '../../utils/ThemeHandler';

export function SignUp() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // const context = useContext(ThemeContext);

  return (
    <View
      style={[
        signInStyles.container,
        // { backgroundColor: colors[`medium${context.theme}`] },
      ]}
    >
      <View style={signInStyles.logoContainer}>
        <SvgLogo />
      </View>
      <View style={signInStyles.inputWrapper}>
        <Text style={signInStyles.inputLabel}>E-mail</Text>
        <TextInput
          style={[
            signInStyles.input,
            // { borderColor: colors[`light${context.theme}`] },
          ]}
          onChangeText={text => setFormData({ ...formData, email: text })}
          placeholder="email@dominio.com"
          // placeholderTextColor={colors[`light${context.theme}`]}
          autoCompleteType="email"
        />
        <Text style={signInStyles.inputLabel}>Senha</Text>
        <TextInput
          style={[
            signInStyles.input,
            // { borderColor: colors[`light${context.theme}`] },
          ]}
          onChangeText={text => setFormData({ ...formData, password: text })}
          placeholder=""
          // placeholderTextColor={colors[`light${context.theme}`]}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <Text style={signInStyles.inputLabel}>Confirmar Senha</Text>
        <TextInput
          style={[
            signInStyles.input,
            // { borderColor: colors[`light${context.theme}`] },
          ]}
          onChangeText={text =>
            setFormData({ ...formData, confirmPassword: text })
          }
          placeholder=""
          // placeholderTextColor={colors[`light${context.theme}`]}
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
