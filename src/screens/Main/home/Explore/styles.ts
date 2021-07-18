import { StyleSheet } from 'react-native';
import { Theme } from '../../../../@types/colors';

export const exploreStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.secondary.darkest,
      color: theme.colors.common.white,
    },
    scrollView: {
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.secondary.darkest,
    },
  });
  return styles;
};
