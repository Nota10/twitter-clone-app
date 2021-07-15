import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import { colors } from '../../global/colors';
import { tweetStyles } from './styles';
import logo from '../../../assets/logo.png';

export function Tweet({ post }: any) {
  return (
    <View style={tweetStyles.rootContainer}>
      <View style={tweetStyles.container}>
        <View style={{ width: '20%' }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={'avatarUrl' in post ? { uri: post.avatarUrl } : logo}
          />
        </View>
        <View style={tweetStyles.contentContainer}>
          <View style={tweetStyles.contentContainerRows}>
            <Text style={tweetStyles.textUserName}>
              {'userName' in post ? post.userName : 'Francis'}&nbsp;
            </Text>
            <Text style={tweetStyles.textUserTag}>
              {'userTag' in post ? post.userTag : `@User_${post.userId}`} • 1h
            </Text>
          </View>
          <Text style={tweetStyles.textBody}>{post.body}</Text>
          <Text style={tweetStyles.textHashtags}>
            #Bergamota #OvoFrito #Hashtag
          </Text>
          <View style={tweetStyles.iconsContainer}>
            <AntDesign name="message1" color={colors.white} size={22} />
            <AntDesign name="sync" color={colors.white} size={22} />
            <AntDesign name="frowno" color={colors.white} size={22} />
            <AntDesign name="sharealt" color={colors.white} size={22} />
          </View>
        </View>
      </View>
    </View>
  );
}
