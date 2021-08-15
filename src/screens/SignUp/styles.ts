import { StyleSheet } from 'react-native';
import { Theme } from '../../@types/colors';

export const signUpStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
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
    pageTitle: {
      marginBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 24,
      color: theme.colors.common.white,
    },
    inputWrapper: {
      width: '70%',
      marginTop: 65,
      marginBottom: 25,
    },
    inputLabel: {
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 20,
      color: theme.colors.common.white,
    },
    input: {
      marginTop: 5,
      marginBottom: 15,
      color: theme.colors.common.white,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.colors.secondary.light,
      borderWidth: 2,
      borderRadius: 40,
      paddingVertical: 15,
      paddingHorizontal: 25,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.secondary.main,
      alignItems: 'center',
      justifyContent: 'flex-start',
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
    logoContainer: {
      width: 65,
      height: 80,
      alignItems: 'center',
      marginTop: 125,
    },
    spinnerText: { color: theme.colors.primary.dark },
  });
  return styles;
};
