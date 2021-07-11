import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

import { theme } from '../../global/theme';
import COLORS from '../../global/colors';

import SvgLogo from '../../components/Icons/logo';

const showAlert = (title:string, body:string) =>
  Alert.alert(
    title,
    body,
    [
      {
        text: "Ok",
        style: "default",
      },
    ]
  );

function submitLogin(navigation, email:String, password:String){
  if(!email) { return showAlert('Ops!', 'Insira um e-mail válido:\nSincere@april.biz\nShanna@melissa.tv\nNathan@yesenia.net\nJulianne.OConner@kory.org');}
  /* Emails for testing
  /     - Sincere@april.biz
  /     - Shanna@melissa.tv
  /     - Nathan@yesenia.net
  /     - Julianne.OConner@kory.org
  */
  console.log(`Attempt to login with email:${email}`);
  fetch(`https://jsonplaceholder.typicode.com/users/?email=${email}`)
  .then(response => response.json())
  .then(async json => {
    let found = json[0];
    if(!found.username) { return console.log('Login failed'); }
    console.log(`Login successfull with user ${found.username}`)
    await AsyncStorage.setItem('email',    JSON.stringify(email));
    await AsyncStorage.setItem('password', JSON.stringify(password));
    console.log(`Navigating`);
    navigation.navigate('Home', { user: found });
  });
}

async function attempLocalLogin(navigation){
  try{
    const localEmail = await AsyncStorage.getItem('email');
    const localPassword = await AsyncStorage.getItem('password');
    if(localEmail && localPassword){
      submitLogin(navigation, JSON.parse(localEmail), JSON.parse(localPassword))
    }
  }catch(error){
    console.log(error);
  }
}

export function SignIn({ navigation }) {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  attempLocalLogin(navigation);

  return (
    <View style={ { ...theme.container, flex: 1 } }>
      <View style={{
        width: 65,
        height: 80,
        alignItems: 'center',
        marginTop: 125
      }}
      >
        <SvgLogo />
      </View>
      <View style={theme.input_wrapper}>
        <Text style={theme.input_label}>E-mail</Text>
        <TextInput
          style={theme.input}
          onChangeText={onChangeEmail}
          placeholder="email@dominio.com"
          placeholderTextColor={COLORS.lightPurple}
          defaultValue="Sincere@april.biz"
          autoCompleteType="email"
        />
        <Text style={theme.input_label}>Senha</Text>
        <TextInput
          style={theme.input}
          onChangeText={onChangePassword}
          placeholder=""
          placeholderTextColor={COLORS.lightPurple}
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>
      <RectButton
        style={theme.button}
        onPress={() => {submitLogin(navigation, email, password)}}
      >
          <Text style={theme.button_text}>Entrar</Text>
      </RectButton>
      <Text style={theme.bottomMsg}>
        Não possui conta? <Text style={theme.link} onPress={() => navigation.navigate('SignUp')}>Registrar-se</Text>
      </Text>
    </View>
  );
}
