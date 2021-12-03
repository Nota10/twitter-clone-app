import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import { userItemStyle } from './styles';
import logo from '../../../assets/logo_alpha.png';
import { useThemeObject } from '../../hooks/theme.hook';
import { useThemeContext } from '../../contexts/ThemeContext';

export function UserItem({ post, executeAction }: any) {
  const styles = useThemeObject(userItemStyle);

  const { theme } = useThemeContext();

  return (
    <View style={[styles.rootContainer]}>
      <View style={styles.container} >
        <View style={{ width: '20%' }}>
          <Image
            onMagicTap={() => {executeAction(post._id)}}
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={/*post.avatar.url*/logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainerRows}>
            <Text style={styles.textUserName} onPress={() => {executeAction(post._id)}}>
              {post.name}&nbsp;
            </Text>
            <Text style={styles.textUserTag} onPress={() => {executeAction(post._id)}}>
              @{post.username}
            </Text>
          </View>
          <Text style={styles.textBody}>{post.bio || '-'}</Text>
          <View style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'flex-end', marginRight: 20}}>
              <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>{post.followersCount} </Text>
              <Text style={{color:'#fff', fontSize:16}}>Seguidores</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
              <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>{post.followingCount} </Text>
              <Text style={{color:'#fff', fontSize:16}}>Seguindo</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
