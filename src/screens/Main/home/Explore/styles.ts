import { StyleSheet } from 'react-native';
import { Theme } from '../../../../@types/colors';

export const exploreStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
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
      margin: '5%',
    },
    formText: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: theme.colors.common.white,
      fontSize: 20,
    },
    searchText: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: theme.colors.common.white,
      fontSize: 15,
      opacity: 0.5,
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
      textAlignVertical: 'top',
    },
    scrollView: {
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.secondary.dark,
      paddingBottom: 100,
    },
  });
  return styles;
};
