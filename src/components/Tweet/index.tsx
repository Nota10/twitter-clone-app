import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import { theme } from '../../global/theme';
import COLORS from '../../global/colors';

export function Tweet({ post }) {
  return (
    <View style={{ ...theme.container, backgroundColor:COLORS.darkPurple, paddingVertical: 25, paddingHorizontal: 15, borderColor:COLORS.darkestPurple, borderTopWidth:1}}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', alignContent:'flex-start'}}>
        <View style={{width:'20%'}}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 100}}
          source={('avatarUrl' in post) ? ({ uri: post.avatarUrl }) : require('../../../assets/logo.png')}
        />
        </View>
        <View style={{display:'flex', flexDirection:'column', width:'80%'}}>
          <View style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color:COLORS.white }}>
              {('userName' in post) ? post.userName : 'Francis'}&nbsp;
            </Text>
            <Text style={{ fontSize: 18, color:COLORS.lightPurple }}>
              {('userTag' in post) ? post.userTag : `@User_${post.userId}`} • 1h
            </Text>
          </View>
          <Text style={{ fontSize: 18, color:COLORS.white, marginBottom: 5}}>{post.body}</Text>
          <Text style={{ fontSize: 18, color:COLORS.yellow}}>#Bergamota #OvoFrito #Hashtag</Text>
          <View style={{display:'flex', flexDirection:'row', width:'80%', marginTop:15, justifyContent:'space-between'}}>
            <AntDesign  name="message1" color={COLORS.white} size={22} />
            <AntDesign  name="sync" color={COLORS.white} size={22} />
            <AntDesign  name="frowno" color={COLORS.white} size={22} />
            <AntDesign  name="sharealt" color={COLORS.white} size={22} />
          </View>
        </View>
      </View>
    </View>
  );
}
