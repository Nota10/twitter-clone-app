import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import { notificationStyles } from './styles';
import logo from '../../../assets/logo_alpha.png';
import { useThemeObject } from '../../hooks/theme.hook';
import { useThemeContext } from '../../contexts/ThemeContext';

export function Notification({ post }: any) {
  const styles = useThemeObject(notificationStyles);

  const { theme } = useThemeContext();

  return (
    <View style={[styles.rootContainer]}>
      <View style={styles.container}>
        <View style={{ width: '20%' }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={'avatarUrl' in post ? { uri: post.avatarUrl } : logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <AntDesign
            name="close"
            style={styles.closeIcon}
            color={theme.colors.common.white}
            size={22}
          />
          <View style={styles.contentContainerRows}>
            <Text style={styles.textUserName}>
              {'userName' in post ? post.userName : 'Francis'}&nbsp;
            </Text>
            <Text style={styles.textUserTag}>
              {'userTag' in post ? post.userTag : `@User_${post.userId}`} • 1h
            </Text>
          </View>
          <Text style={styles.textBody}>Menciounou você em um post</Text>
        </View>
      </View>
    </View>
  );
}
