import { StyleSheet } from 'react-native';
import { Theme } from '../../@types/colors';

export const headerStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 15,
      paddingVertical: 15,
      paddingTop: 45,
      backgroundColor: theme.colors.secondary.main,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.secondary.dark,
    },
    imageContainer: { width: '20%' },
    image: { width: 35, height: 35 },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      color: theme.colors.common.white,
    },
  });
  return styles;
};
