import { StyleSheet } from 'react-native';

import { colors } from '../../global/colors';

export const signInStyles = StyleSheet.create({
  button: {
    height: 45,
    width: '70%',
    backgroundColor: colors.primaryDark,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputWrapper: {
    width: '70%',
    marginTop: 65,
    marginBottom: 25,
  },
  inputLabel: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    color: colors.white,
  },
  input: {
    marginTop: 5,
    marginBottom: 15,
    color: colors.white,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  container: {
    flex: 1,
    // backgroundColor: colors.secondaryDark,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomMsg: {
    position: 'absolute',
    bottom: 30,
    left: 60,
    color: colors.white,
  },
  link: {
    color: colors.primary,
  },
  logoContainer: {
    width: 65,
    height: 80,
    alignItems: 'center',
    marginTop: 125,
  },
  spinnerText: { color: colors.primaryDark },
});
