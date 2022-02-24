import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
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

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const Profile: React.FC = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataTweets, setDataTweets] = useState([]);
  const [userId, setUserId] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const styles = useThemeObject(profileStyles);

  const getData = async () => {
    const id = await getUserid();
    setUserId(id);
    try {
      const data = await api.authGet('/auth/protected');
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTweetData = async () => {
    try {
      const { data } = await api.authGet('/tweet');
      setDataTweets(data);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Ops!', 'Essa função está sendo implementada!');
  };

  const handleTweetAction = async (action: string, tweetId: any) => {
    switch (action) {
      case 'expand':
        console.log('Expandindo...');
        break;
      case 'delete':
        setLoading(true);
        api.authDelete(`/tweet/${tweetId}`).then(response => {
          getTweetData();
        });
        break;
      default:
        setLoading(true);
        api.authPost(`/tweet/${tweetId}/${action}`, {}).then(response => {
          getTweetData();
        });
        break;
    }
  };

  const onRefresh = async () => {
    setLoading(true);
    getData();
    getTweetData();
  };

  useEffect(() => {
    setLoading(true);
    getData();
    getTweetData();
  }, []);

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
          <View style={styles.formContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                marginBottom: 20,
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
                  {data.name}
                </Text>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: 10,
                    opacity: 0.5,
                  }}
                >
                  @{data.username}
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
                      {data.followersCount}{' '}
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
                      {data.followingCount}{' '}
                    </Text>
                    <Text style={{ color: '#fff', fontSize: 16 }}>
                      Seguindo
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              style={styles.formInput}
              placeholderTextColor="white"
              defaultValue={data.name}
            />
          </View>
          <View>
            <View style={styles.formContainer}>
              <Text style={styles.inputLabel}>Usuário</Text>
              <TextInput
                style={styles.formInput}
                placeholderTextColor="white"
                defaultValue={data.username}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput
                style={styles.formInput}
                placeholderTextColor="white"
                defaultValue={data.email}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.inputLabel}>Bio</Text>
              <TextInput
                style={styles.formInput}
                placeholderTextColor="white"
                defaultValue={data.bio}
              />
            </View>
            <View style={styles.formContainer}>
              <RectButton
                style={styles.button}
                onPress={() => {
                  handleSubmit();
                }}
              >
                <Text style={styles.buttonText}>Enviar</Text>
              </RectButton>
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Últimos posts</Text>
          </View>
          {dataTweets &&
            dataTweets.map(post => (
              <Tweet
                key={`profile_tweet_${post._id}`}
                post={post}
                executeAction={handleTweetAction}
                loading={loading}
                userId={userId}
              />
            ))}
          {!dataTweets && <Text>Você não possuí nenhum tweet</Text>}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Profile };
