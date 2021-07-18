import { StyleSheet } from 'react-native';
import { Theme } from '../../../@types/colors';

export const profileStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.secondary.dark,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    dataContainer: {
      height: '80%',
      width: '100%',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      padding: 50,
      backgroundColor: theme.colors.secondary.dark,
    },
    dataLabel: {
      fontSize: 18,
      color: theme.colors.common.white,
      fontWeight: 'bold',
    },
    dataValue: {
      fontSize: 16,
      color: theme.colors.common.white,
    },
  });
  return styles;
};
