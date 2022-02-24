import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import { tweetStyles } from './styles';
import logo from '../../../assets/logo_alpha.png';
import { useThemeObject } from '../../hooks/theme.hook';
import { useThemeContext } from '../../contexts/ThemeContext';
import moment from 'moment';

export function Tweet({
  post,
  handleProfileAction,
  executeAction,
  loading,
  userId,
  sameUser,
}: any) {
  const styles = useThemeObject(tweetStyles);

  const id = post._id;

  const now = new Date();
  const then = post.createdAt;

  const diff = moment.duration(moment(now).diff(moment(then)));
  const m = diff.minutes().toString();
  const h = diff.hours().toString();
  const time =
    diff.minutes() > 1
      ? (h.length == 1 ? '0' : '') + h + ':' + (m.length == 1 ? '0' : '') + m
      : 'Agora';

  const { theme } = useThemeContext();

  const handleTweetAction = async (action: any) => {
    executeAction(action, id);
  };

  // console.log(userId);

  return (
    <View style={[styles.rootContainer]}>
      <View style={styles.container}>
        <View style={{ width: '20%' }}>
          <Image
            style={{ width: 45, height: 45, borderRadius: 100 }}
            source={/*post.user.avatar.url ||*/ logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainerRows}>
            <Text
              style={styles.textUserName}
              onPress={() => {
                handleProfileAction(post.user.id);
              }}
            >
              {post.user.name || 'Francis'}&nbsp;
            </Text>
            <Text
              style={styles.textUserTag}
              onPress={() => {
                handleProfileAction(post.user.id);
              }}
            >
              {post.user.username
                ? `@${post.user.username}`
                : `@User_${post.user.id}`}{' '}
              • {time}
            </Text>
          </View>
          <Text style={styles.textBody}>{post.body}</Text>
          {post.hashtags &&
            post.hashtags.map((hashtag: string, index: string) => (
              <Text key={`${hashtag}-${index}`} style={styles.textHashtags}>
                #{hashtag}{' '}
              </Text>
            ))}
          <View style={styles.iconsContainer}>
            <AntDesign
              onPress={loading ? () => {} : () => handleTweetAction('expand')}
              name="ellipsis1"
              color={
                loading
                  ? theme.colors.secondary.light
                  : theme.colors.common.white
              }
              size={22}
            />
            <Text style={loading ? null : styles.iconText}>
              {post.likeCount}
            </Text>
            <AntDesign
              onPress={loading ? () => {} : () => handleTweetAction('like')}
              name={post.likeList.indexOf(userId) != -1 ? 'like1' : 'like2'}
              color={
                loading
                  ? theme.colors.secondary.light
                  : theme.colors.common.white
              }
              size={22}
            />
            <Text style={loading ? null : styles.iconText}>
              {post.deslikeCount}
            </Text>
            <AntDesign
              onPress={loading ? () => {} : () => handleTweetAction('deslike')}
              name={
                post.deslikeList.indexOf(userId) != -1 ? 'dislike1' : 'dislike2'
              }
              color={
                loading
                  ? theme.colors.secondary.light
                  : theme.colors.common.white
              }
              size={22}
            />
            {sameUser ? (
              <AntDesign
                onPress={loading ? () => {} : () => handleTweetAction('delete')}
                name="delete"
                color={
                  loading
                    ? theme.colors.secondary.light
                    : theme.colors.common.white
                }
                size={22}
              />
            ) : (
              <AntDesign
                onPress={loading ? () => {} : () => handleTweetAction('share')}
                name="sharealt"
                color={
                  loading
                    ? theme.colors.secondary.light
                    : theme.colors.common.white
                }
                size={22}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
