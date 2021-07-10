import { StyleSheet } from 'react-native';
import COLORS from './colors';

export const theme = StyleSheet.create({
  button: {
    height: 45,
    width: '70%',
    backgroundColor: COLORS.gold,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lead_text: {
    width: '70%',
    marginTop: 65,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 30,
    color: COLORS.white,
  },
  input_wrapper: {
    width: '70%',
    marginTop: 65,
    marginBottom: 25,
  },
  input_label: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    color: COLORS.white,
  },
  input: {
    marginTop: 5,
    marginBottom: 15,
    color: COLORS.white,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.lightPurple,
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
	container: {
		flex: 1,
		backgroundColor: COLORS.darkPurple,
		alignItems: 'center',
    justifyContent: 'flex-start'
	},
  bottomMsg: {
    position: 'absolute',
    bottom: 30,
    left: 60,
    color: COLORS.white,
  },
  link: {
    color: COLORS.yellow
  }
});
