import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Alert, AsyncStorage, View } from 'react-native';
import axios from 'axios';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AntDesign  } from '@expo/vector-icons';
import COLORS from '../../global/colors';

// Screens
import { Home } from '../home';


const Drawer = createDrawerNavigator();

const { API_URL } = process.env;

type Data = {
  url: string;
  login: string;
};

export function Main({ route, navigation }) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        console.log('data', data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const signOut = (e = null) => {
    // Prevent default behavior of leaving the screen
    if(e){ e.preventDefault(); }

    console.log('OPA');

    // Prompt the user before leaving the screen
    Alert.alert(
      'Tem certeza?',
      'Você irá sair de sua conta e voltará para a tela inicial',
      [
        {
          text: "Voltar",
          style: "cancel",
          onPress: () => {}
        },
        {
          text: "Sair",
          style: "default",
          onPress: () => {
            AsyncStorage.removeItem('email');
            AsyncStorage.removeItem('password');
            if(e){
              navigation.dispatch(e.data.action);
            }else{
              navigation.navigate('Welcome');
            }
          }
        },
      ]
    );
  }

  navigation.addListener('beforeRemove', (e) => {
    signOut(e);
  });

  const CustomDrawerContent = (props) => {
    return (
    <DrawerContentScrollView {...props} contentContainerStyle={{display:'flex', justifyContent:'space-between', height:'100%', paddingBottom:50}}>
      <View>
        <DrawerItemList {...props } />
      </View>
        <DrawerItem
          label="Sair"
          onPress={() => signOut()}
          icon= {({ color, size }) => (
            <AntDesign  name="closecircleo" color={color} size={size} style={{paddingLeft: 15, color: COLORS.white, bottom:0}} />
          )}
          labelStyle={{fontSize: 22, color: COLORS.white}}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
    drawerStyle={{
      backgroundColor: COLORS.darkerPurple,
      width: 240,
      paddingTop: 60,
      height:'100%'
    }}
    drawerContent={CustomDrawerContent}
    drawerContentOptions={{
      activeTintColor: COLORS.darkerPurple,
      activeBackgroundColor: COLORS.darkPurple,
      labelStyle: {
        fontSize: 22,
        color: COLORS.white,
      },
    }}>
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: 'Início', headerTintColor: COLORS.lightPurple,
        drawerIcon: ({ color, size }) => (
          <AntDesign  name="home" color={color} size={size} style={{paddingLeft: 15, color: COLORS.white}} />
        ),
        }}
        children={()=><Home navigation={navigation} route={route}/>}
      />
      <Drawer.Screen
        name="Profile"
        options={{ drawerLabel: 'Perfil', headerTintColor: COLORS.lightPurple,
        drawerIcon: ({ color, size }) => (
          <AntDesign  name="user" color={color} size={size} style={{paddingLeft: 15, color: COLORS.white}} />
        ),
        }}
        children={()=><Home navigation={navigation} route={route}/>}
      />
    </Drawer.Navigator>
  );
}
