import { StyleSheet } from 'react-native';
import { Theme } from '../../../@types/colors';

export const profileStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.secondary.dark,
    },
    formContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.secondary.dark,
      margin: '5%'
    },
    formText: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      color: theme.colors.common.white,
      fontSize: 20,
    },
    formInput: {
      marginVertical: 12,
      width: '100%',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme.colors.common.white,
      backgroundColor: theme.colors.secondary.darkest,
      color: theme.colors.common.white,
      fontSize: 20,
      padding: 10,
      textAlignVertical: 'top'
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
    inputWrapper: {
      marginVertical: '5%',
    },
    scrollView: {
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.secondary.dark,
      paddingBottom: 100
    },
    button: {
      height: 45,
      width: '100%',
      backgroundColor: theme.colors.primary.dark,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.common.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  return styles;
};
