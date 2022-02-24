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
      marginBottom: 100,
    },
    buttonText: {
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.common.white,
      fontSize: 17,
      fontWeight: 'bold',
    },
    buttonDate: {
      paddingVertical: 15,
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 80,
      fontSize: 17,
      fontWeight: 'bold',
      backgroundColor: theme.colors.primary.dark,
      color: theme.colors.common.white,
      marginBottom: 10,
    },
    pageTitle: {
      marginBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 20,
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
      fontSize: 18,
      color: theme.colors.common.white,
    },
    input: {
      marginTop: 5,
      marginBottom: 15,
      color: theme.colors.common.white,
      fontSize: 15,
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
