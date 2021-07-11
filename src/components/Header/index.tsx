import 'react-native-gesture-handler';
import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import COLORS from '../../global/colors';
import { useNavigation } from '@react-navigation/native';

export function Header({title}) {
  const navigation = useNavigation();
  return (
    <View style={{display:'flex', flexDirection:'row', width:'100%', paddingHorizontal: 15, paddingVertical: 15, paddingTop: 45, backgroundColor:COLORS.darkPurple, borderBottomWidth: 1, borderBottomColor: COLORS.darkerPurple, alignItems:'center'}}>
        <View style={{width:'20%'}}>
          <Pressable onPress={() => {navigation.openDrawer();}}>
            <Image
              style={{ width: 35, height: 35}}
              source={require('../../../assets/logo.png')}
            />
          </Pressable>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color:COLORS.white }}>{title}</Text>
      </View>
  );
}
