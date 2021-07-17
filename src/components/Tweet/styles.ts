import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const tweetStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: colors.secondaryDark,
    paddingVertical: 25,
    paddingHorizontal: 15,
    // borderColor: colors.secondaryDarkest,
    borderTopWidth: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  contentContainer: { display: 'flex', flexDirection: 'column', width: '80%' },
  contentContainerRows: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textUserName: { fontWeight: 'bold', fontSize: 20, color: colors.white },
  textUserTag: { fontSize: 18, color: colors.secondary },
  textBody: { fontSize: 18, color: colors.white, marginBottom: 5 },
  textHashtags: { fontSize: 18, color: colors.primary },
  iconsContainer: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 15,
    justifyContent: 'space-between',
  },
});
