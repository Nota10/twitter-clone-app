import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../global/colors';

// Screens
import { Home } from './home';
import { Profile } from './Profile';
import { useNavigation } from '@react-navigation/native';
import { mainStyles } from './styles';

const Drawer = createDrawerNavigator();

export function Main() {
  const navigation = useNavigation();

  // const CustomDrawerContent = (props: ScrollViewProps) => {
  //   return (
  //     <DrawerContentScrollView
  //       {...props}
  //       contentContainerStyle={{
  //         display: 'flex',
  //         justifyContent: 'space-between',
  //         height: '100%',
  //         paddingBottom: 50,
  //       }}
  //     >
  //       <View>
  //         <DrawerItemList />
  //       </View>
  //       <DrawerItem
  //         label="Sair"
  //         onPress={() => signOut()}
  //         icon={({ color, size }) => (
  //           <AntDesign
  //             name="closecircleo"
  //             color={color}
  //             size={size}
  //             style={{ paddingLeft: 15, color: colors.white, bottom: 0 }}
  //           />
  //         )}
  //         labelStyle={{ fontSize: 22, color: colors.white }}
  //       />
  //     </DrawerContentScrollView>
  //   );
  // };

  return (
    <Drawer.Navigator
      drawerStyle={mainStyles.drawer}
      // drawerContent={}
      drawerContentOptions={{
        activeTintColor: colors.secondaryDarker,
        activeBackgroundColor: colors.secondaryDark,
        labelStyle: {
          fontSize: 22,
          color: colors.white,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Início',
          headerTintColor: colors.secondary,
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="home"
              color={color}
              size={size}
              style={{ paddingLeft: 15, color: colors.white }}
            />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Perfil',
          headerTintColor: colors.secondary,
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="user"
              color={color}
              size={size}
              style={{ paddingLeft: 15, color: colors.white }}
            />
          ),
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
}
