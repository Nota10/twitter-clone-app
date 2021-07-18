import { StyleSheet } from 'react-native';
import { Theme } from '../../@types/colors';

export const welcomeStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.secondary.main,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    logoContainer: {
      width: 65,
      height: 80,
      alignItems: 'center',
      marginTop: 125,
    },
    button: {
      height: 45,
      width: '70%',
      backgroundColor: theme.colors.primary.dark,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.common.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
    bottomMsg: {
      position: 'absolute',
      bottom: 30,
      left: 60,
      color: theme.colors.common.white,
    },
    link: {
      color: theme.colors.primary.main,
    },
    leadText: {
      width: '70%',
      marginTop: 65,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 30,
      color: theme.colors.common.white,
    },
  });
  return styles;
};
