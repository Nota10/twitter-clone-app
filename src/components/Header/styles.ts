import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 45,
    backgroundColor: colors.secondaryDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryDarker,
  },
  imageContainer: { width: '20%' },
  image: { width: 35, height: 35 },
  title: { fontWeight: 'bold', fontSize: 25, color: colors.white },
});
