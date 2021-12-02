import { StyleSheet } from 'react-native';
import { Theme } from '../../../@types/colors';

export const homeStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    tabNavigator: {
      height: 70,
      backgroundColor: theme.colors.secondary.dark,
      margin: 0,
      borderTopColor: theme.colors.secondary.dark,
    },
  });
  return styles;
};
