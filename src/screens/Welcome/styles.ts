import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const welcomeStyles = StyleSheet.create({
  leadText: {
    width: '70%',
    marginTop: 65,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 30,
    color: colors.white,
  },
});
