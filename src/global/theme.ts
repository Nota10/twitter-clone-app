import { StyleSheet } from 'react-native';
let darkMode = false;

const primaryColor = '#1DA1F2';

export const theme = StyleSheet.create({
  color: {
    backgroundColor: darkMode ? '#16202A' : '#FFFFFF',
    font: darkMode ? '#FFFFFF' : '#000000',
  },
  button: {
    height: 45,
    width: '70%',
    backgroundColor: '#1DA1F2',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lead_text: {
    width: '70%',
    marginTop: 250,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 30,
    color: '#000000',
  },
  input_wrapper: {
    marginTop: 125
  },
  input_label: {
    width: '70%',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    color: '#000000',
  },
  input: {
    marginTop: 5,
    marginBottom: 15,
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});
