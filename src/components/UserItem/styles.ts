import { StyleSheet } from 'react-native';
import { Theme } from '../../@types/colors';

export const userItemStyle = (theme: Theme) => {
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.secondary.dark,
      paddingVertical: 25,
      paddingHorizontal: 15,
      borderColor: theme.colors.secondary.darkest,
      borderTopWidth: 1,
    },
    closeIcon: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
    },
    contentContainerRows: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    textUserName: {
      fontWeight: 'bold',
      fontSize: 15,
      color: theme.colors.common.white,
    },
    textUserTag: { fontSize: 15, color: theme.colors.secondary.light },
    textBody: {
      fontSize: 15,
      color: theme.colors.common.white,
      marginVertical: 5,
    },
    textHashtags: { fontSize: 15, color: theme.colors.primary.main },
    iconsContainer: {
      flexDirection: 'row',
      width: '80%',
      marginTop: 15,
      justifyContent: 'space-between',
    },
  });

  return styles;
};
