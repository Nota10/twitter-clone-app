import React from 'react';

import { Pressable, Text, View, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { headerStyles } from './styles';
import logo from '../../../assets/logo_alpha.png';
import { useThemeObject } from '../../hooks/theme.hook';
import { AntDesign } from '@expo/vector-icons';

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
          <AntDesign
            name="doubleright"
            color={'#fff'}
            size={22}
          />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
