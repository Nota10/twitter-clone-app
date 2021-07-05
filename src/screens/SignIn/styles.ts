import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.color.background,
  },
  text: {
    width: '70%',
    marginTop: 250,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 30,
    color: theme.color.font,
  },
  icon: {
    position: 'absolute',
    top: 50,
    height: 50,
    width: 50,
  },
  bottomMsg: {
    position: 'absolute',
    bottom: 30,
    left: 60,
    color: theme.color.font,
  },
  link: {
    color: '#1DA1F2',
  },
});
