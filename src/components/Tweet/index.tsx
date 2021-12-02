import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import { tweetStyles } from './styles';
import logo from '../../../assets/logo_alpha.png';
import { useThemeObject } from '../../hooks/theme.hook';
import { useThemeContext } from '../../contexts/ThemeContext';
import { api } from '../../services/api';
import { getToken } from '../../services/auth';

export function Tweet({ post, executeAction, loading, userId }: any) {
  const styles = useThemeObject(tweetStyles);

  const id = post._id;

  const { theme } = useThemeContext();

  const handleTweetAction = async (action:any) => {
    executeAction(action, id);
  };

  return (
    <View style={[styles.rootContainer]}>
      <View style={styles.container}>
        <View style={{ width: '20%' }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={/*post.user.avatar.url ||*/ logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainerRows}>
            <Text style={styles.textUserName}>
              {post.user.name || 'Francis'}&nbsp;
            </Text>
            <Text style={styles.textUserTag}>
              {post.user.username ? `@${post.user.username}` : `@User_${post.user.id}`} • {new Date(post.createdAt).toTimeString().split(' ')[0]}
            </Text>
          </View>
          <Text style={styles.textBody}>{post.body}</Text>
          <Text style={styles.textHashtags}>
            {post.hashtags && (post.hashtags.map(hashtag => (
              <Text>{hashtag}</Text>
            )))}
          </Text>
          <View style={styles.iconsContainer}>
            <AntDesign
              onPress={loading ? () => {} : () => handleTweetAction('expand')}
              name="ellipsis1"
              color={loading ? theme.colors.secondary.light : theme.colors.common.white}
              size={22}
            />
            <Text style={loading ? null : styles.iconText}>{post.likeCount}</Text>
            <AntDesign
              onPress={loading ? () => {} : () => handleTweetAction('like')}
              name={post.likeList.indexOf(post.user.id) != -1 ? 'like1' : 'like2'}
              color={loading ? theme.colors.secondary.light : theme.colors.common.white}
              size={22}
            />
            <Text style={loading ? null : styles.iconText}>{post.deslikeCount}</Text>
            <AntDesign
              onPress={loading ? () => {} : () => handleTweetAction('deslike')}
              name={post.deslikeList.indexOf(post.user.id) != -1 ? 'dislike1' : 'dislike2'}
              color={loading ? theme.colors.secondary.light : theme.colors.common.white}
              size={22}
            />
            <AntDesign
              onPress={loading ? () => {} : () => handleTweetAction('share')}
              name="sharealt"
              color={loading ? theme.colors.secondary.light : theme.colors.common.white}
              size={22}
            />
            {/*userId*/post.user.id == post.user.id && (
             <AntDesign 
              onPress={loading ? () => {} : () => handleTweetAction('delete')}
              name="delete"
              color={loading ? theme.colors.secondary.light : theme.colors.common.white}
              size={22}
             /> 
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
