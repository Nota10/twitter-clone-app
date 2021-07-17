import { StyleSheet } from 'react-native';
import { colors } from '../../../global/colors';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.secondaryDark,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dataContainer: {
    height: '80%',
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 50,
    // backgroundColor: colors.secondaryDark,
  },
  dataLabel: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  dataValue: { fontSize: 16, color: colors.white },
});
