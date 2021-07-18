import 'react-native-gesture-handler';
import React from 'react';
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
import { useThemeContext } from '../../contexts/ThemeContext';
import { PURPLE_THEME_ID } from '../../global/colors/purple.theme';
import { BLUE_THEME_ID } from '../../global/colors/blue.theme';
import { mainStyles } from './styles';
import { useThemeObject } from '../../hooks/theme.hook';
import { View } from 'react-native';
import { GRAY_THEME_ID } from '../../global/colors/gray.theme';

const Drawer = createDrawerNavigator();

export function Main() {
  const navigation = useNavigation();

  const styles = useThemeObject(mainStyles);
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Drawer.Navigator
      drawerStyle={styles.drawer}
      // drawerContent={}
      drawerContentOptions={{
        activeTintColor: theme.colors.secondary.dark,
        activeBackgroundColor: theme.colors.secondary.main,
        labelStyle: {
          fontSize: 22,
          color: theme.colors.common.white,
        },
      }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <View style={styles.items}>
              <DrawerItem
                style={styles.purple}
                label="Roxo"
                onPress={() => toggleTheme(PURPLE_THEME_ID)}
              />
              <DrawerItem
                style={styles.blue}
                label="Azul"
                onPress={() => toggleTheme(BLUE_THEME_ID)}
              />
              <DrawerItem
                style={styles.gray}
                label="Cinza"
                onPress={() => toggleTheme(GRAY_THEME_ID)}
              />
            </View>
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Início',
          headerTintColor: theme.colors.secondary.light,
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="home"
              color={color}
              size={size}
              style={{ paddingLeft: 15, color: theme.colors.common.white }}
            />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Perfil',
          headerTintColor: theme.colors.secondary.light,
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="user"
              color={color}
              size={size}
              style={{ paddingLeft: 15, color: theme.colors.common.white }}
            />
          ),
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
}
