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
      flex: 1,
      alignContent: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.secondary.dark,
    }
  });
  return styles;
};
