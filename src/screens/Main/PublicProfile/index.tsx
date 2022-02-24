import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  RefreshControl,
  Image,
} from 'react-native';
import { Header } from '../../../components/Header';
import { profileStyles } from './styles';
import { useThemeObject } from '../../../hooks/theme.hook';
import logo from '../../../../assets/logo_alpha.png';
import { api } from '../../../services/api';
import { Tweet } from '../../../components/Tweet';
import { getUserid } from '../../../services/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../../global/theme';

type User = {
  _id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const PublicProfile: React.FC = ({ route, navigation }: any) => {
  const styles = useThemeObject(profileStyles);
  let { userId } = route.params;

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState({});
  const [dataTweets, setDataTweets] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [sameUser, setSameUser] = useState(false);

  const getData = async () => {
    const selfId = await getUserid();

    if (selfId === userId) {
      setSameUser(true);
    }

    userId = userId || selfId;

    try {
      const { data: user } = await api.authGet(`/users/${userId}`);
      const { data: tweets } = await api.authGet(`/users/${userId}/tweets`);

      const isFollowing =
        user.followers.filter((user: User) => user._id === selfId).length !== 0;

      setIsFollowing(isFollowing);
      setDataTweets(tweets);
      setData(user);
    } catch (error) {
      return Alert.alert(
        'Ops!',
        'Houve um erro ao carregar as informações do usuário!'
      );

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const action = isFollowing ? 'unfollow' : 'follow';
      await api.authPost(`/users/${userId}/${action}`, {});

      getData();
    } catch (error) {
      return Alert.alert('Ops!', 'Houve um erro!');
    } finally {
      setLoading(false);
    }
  };

  const handleTweetAction = async (action: string, tweetId: any) => {
    switch (action) {
      case 'expand':
        break;
      case 'delete':
        setLoading(true);
        api.authDelete(`/tweet/${tweetId}`).then(response => {
          getData();
        });
        break;
      default:
        setLoading(true);
        api.authPost(`/tweet/${tweetId}/${action}`, {}).then(response => {
          getData();
        });
        break;
    }
  };

  const onRefresh = async () => {
    setLoading(true);
    getData();
  };

  useEffect(() => {
    console.log('USAHDIAHDAIUH');
    setLoading(true);
    setData([]);
    setDataTweets([]);
    getData();
  }, [route]);

  return (
    <View style={styles.container}>
      <Header title="Perfil" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Spinner
            visible={loading}
            textContent="Carregando..."
            textStyle={styles.formText}
          />
          <View style={{ ...styles.formContainer, marginBottom: 10 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Image
                source={logo}
                style={{
                  borderRadius: 8,
                  height: 80,
                  width: 80,
                  marginLeft: 10,
                }}
              />
              <View>
                <Text style={{ color: 'white', fontSize: 30, marginLeft: 10 }}>
                  {data.name || ' -'}
                </Text>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    opacity: 0.5,
                  }}
                >
                  @{data.username || ' -'}
                </Text>

                <View
                  style={{
                    marginLeft: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      marginRight: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}
                    >
                      {data.followersCount || 0}{' '}
                    </Text>
                    <Text style={{ color: '#fff', fontSize: 16 }}>
                      Seguidores
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}
                    >
                      {data.followingCount || 0}{' '}
                    </Text>
                    <Text style={{ color: '#fff', fontSize: 16 }}>
                      Seguindo
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              {sameUser ? (
                <></>
              ) : (
                <RectButton
                  style={styles.button}
                  onPress={() => {
                    handleSubmit();
                  }}
                >
                  <Text style={styles.buttonText}>
                    {isFollowing ? 'Deixar de Seguir' : 'Seguir'}
                  </Text>
                </RectButton>
              )}
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Últimos posts</Text>
          </View>
          {dataTweets &&
            dataTweets.map((post, index) => (
              <Tweet
                key={`public_profile_tweet_${index}`}
                post={post}
                executeAction={handleTweetAction}
                loading={loading}
                userId={userId}
                sameUser={sameUser}
              />
            ))}
          {!dataTweets && <Text>Você não possuí nenhum tweet</Text>}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { PublicProfile };
