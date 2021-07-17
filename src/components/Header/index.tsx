import React, { useContext } from 'react';

import { DrawerState } from 'react-native-gesture-handler';
import { Pressable, Text, View, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { styles } from './styles';
import logo from '../../../assets/logo_alpha.png';
import { ThemeContext } from '../../utils/ThemeHandler';
import { colors } from '../../global/colors';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  const context = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors[`medium${context.theme}`] },
        { borderBottomColor: colors[`dark${context.theme}`] },
      ]}
    >
      <View style={styles.imageContainer}>
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image style={styles.image} source={logo} />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
