import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import SvgLogo from '../../components/Icons/logo';
import { useNavigation } from '@react-navigation/native';
import { signInStyles } from '../SignIn/styles';
import { welcomeStyles } from './styles';
import { useThemeObject } from '../../hooks/theme.hook';
// import { ThemeContext } from '../../utils/ThemeHandler';
// import { colors } from '../../global/colors';

export function Welcome() {
  const navigation = useNavigation();
  const textoEntrada = 'Veja o que está acontecendo no mundo neste momento.';

  const styles = useThemeObject(signInStyles);

  // const context = useContext(ThemeContext);

  // necerrário por enquanto
  // useEffect(() => {
  //   context.themeHandler();
  // }, []);

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
      <Text style={welcomeStyles.leadText}>{textoEntrada}</Text>
      <RectButton
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Criar conta</Text>
      </RectButton>
      <Text style={styles.bottomMsg}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}
