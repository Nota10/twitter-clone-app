import { StyleSheet } from 'react-native';
import { Theme } from '../../@types/colors';
// import { colors } from '../../global/colors';

export const mainStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    drawer: {
      backgroundColor: theme.colors.secondary.dark,
      width: 240,
      paddingTop: 60,
      height: '100%',
    },
    purple: {
      borderColor: theme.colors.common.white,
      backgroundColor: '#7800c7',
      height: 40,
      width: 40,
      borderRadius: 40,
      borderWidth: 2,
    },
    blue: {
      borderColor: theme.colors.common.white,
      backgroundColor: '#0f3655',
      height: 40,
      width: 40,
      borderRadius: 40,
      borderWidth: 2,
    },
    gray: {
      borderColor: theme.colors.common.white,
      backgroundColor: '#555555',
      height: 40,
      width: 40,
      borderRadius: 40,
      borderWidth: 2,
    },
    items: {
      flexDirection: 'row',
      alignContent: 'center',
      marginTop: 520,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return styles;
};
