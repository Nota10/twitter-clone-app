import React from 'react';

import { DrawerState } from 'react-native-gesture-handler';
import { Pressable, Text, View, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { styles } from './styles';
import logo from '../../../assets/logo.png';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

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
