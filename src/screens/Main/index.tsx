import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';

// Screens
import { Home } from './home';
import { Profile } from './Profile';
import { useNavigation } from '@react-navigation/native';
import { mainStyles } from './styles';
import { useThemeContext } from '../../contexts/ThemeContext';
import { PURPLE_THEME_ID } from '../../global/colors/purple.theme';
// import { ThemeContext } from '../../utils/ThemeHandler';

const Drawer = createDrawerNavigator();

export function Main() {
  const navigation = useNavigation();

  const { theme, toggleTheme } = useThemeContext();

  return (
    <Drawer.Navigator
      drawerStyle={[
        mainStyles.drawer,
        // { backgroundColor: colors[`dark${context.theme}`] },
      ]}
      // drawerContent={}
      drawerContentOptions={{
        // activeTintColor: colors[`dark${context.theme}`],
        // activeBackgroundColor: colors[`medium${context.theme}`],
        labelStyle: {
          fontSize: 22,
          // color: colors.white,
        },
      }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              style={mainStyles.lightbulb}
              label="Roxo"
              onPress={() => toggleTheme(PURPLE_THEME_ID)}
              icon={() => (
                <Ionicons
                  name="bulb-outline"
                  size={24}
                  color={theme.colors.common.white}
                />
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
          // headerTintColor: colors[`light${context.theme}`],
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="home"
              color={color}
              size={size}
              // style={{ paddingLeft: 15, color: colors.white }}
            />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Perfil',
          // headerTintColor: colors[`light${context.theme}`],
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="user"
              color={color}
              size={size}
              // style={{ paddingLeft: 15, color: colors.white }}
            />
          ),
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
}
