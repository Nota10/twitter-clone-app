import React from 'react';

import { Pressable, Text, View, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { headerStyles } from './styles';
import logo from '../../../assets/logo_alpha.png';
import { useThemeObject } from '../../hooks/theme.hook';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();
  const styles = useThemeObject(headerStyles);

  return (
    <View style={styles.container}>
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
