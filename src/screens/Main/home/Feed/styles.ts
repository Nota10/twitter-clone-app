import { StyleSheet } from 'react-native';
import { Theme } from '../../../../@types/colors';

export const feedStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.secondary.dark,
    },
    scrollView: {
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.secondary.dark,
    },
  });
  return styles;
};
