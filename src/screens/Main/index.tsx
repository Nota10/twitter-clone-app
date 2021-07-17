import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from '../../global/colors';

// Screens
import { Home } from './home';
import { Profile } from './Profile';
import { useNavigation } from '@react-navigation/native';
import { mainStyles } from './styles';
import { ThemeContext } from '../../utils/ThemeHandler';

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
  const context = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      drawerStyle={[
        mainStyles.drawer,
        { backgroundColor: colors[`dark${context.theme}`] },
      ]}
      // drawerContent={}
      drawerContentOptions={{
        activeTintColor: colors[`dark${context.theme}`],
        activeBackgroundColor: colors[`medium${context.theme}`],
        labelStyle: {
          fontSize: 22,
          color: colors.white,
        },
      }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              style={mainStyles.lightbulb}
              label=""
              onPress={() => context.themeHandler()}
              icon={() => (
                <Ionicons name="bulb-outline" size={24} color={colors.white} />
              )}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Início',
          headerTintColor: colors[`light${context.theme}`],
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
          headerTintColor: colors[`light${context.theme}`],
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
