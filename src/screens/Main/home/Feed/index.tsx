import 'react-native-gesture-handler';

import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';

import { api } from '../../../../services/api';
import { Tweet } from '../../../../components/Tweet';
import { feedStyles } from './styles';
import { useThemeObject } from '../../../../hooks/theme.hook';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { getToken, getUserid } from '../../../../services/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const Feed = ({ handleProfileAction }: any) => {
  const [data, setData] = useState<Array<any>>([]);

  const styles = useThemeObject(feedStyles);

  const [loading, setLoading] = useState(false);

  const [tweetText, setTweetText] = useState('');

  const [refreshing, setRefreshing] = useState(false);

  const [userId, setUserId] = useState('');

  const getData = async () => {
    try {
      setUserId(await getUserid());
      const { data } = await api.authGet('/feed');
      setData(data);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setLoading(true);
    getData();
  };

  const handleSubmit = async () => {
    if (tweetText.split(' ').length < 3) {
      return Alert.alert(
        'Ops!',
        'Digite ao menos três palavras para poder enviar!'
      );
    }

    setLoading(true);
    const tweets = await api.authPost('/tweet', {
      title: '..',
      body: tweetText,
    });

    setLoading(false);
    if (!tweets) {
      return Alert.alert(
        'Ops!',
        'Houve um erro ao publicar! Tente novamente mais tarde!'
      );
    }

    setTweetText('');
    getData();
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
        api.authPost(`/tweet/${tweetId}/${action}`, {}).then(response => {
          getData();
        });
        break;
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Últimos Tweets" />
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
            <Text style={styles.formText}>O que tem te deixado pistola?</Text>
            <TextInput
              style={styles.formInput}
              multiline={true}
              numberOfLines={4}
              maxLength={144}
              value={tweetText}
              onChangeText={text => setTweetText(text)}
            />
            <RectButton
              style={styles.button}
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </RectButton>
          </View>
          {data &&
            data.map((post, index) => (
              <Tweet
                key={`post_${index}`}
                post={post}
                handleProfileAction={handleProfileAction}
                executeAction={handleTweetAction}
                loading={loading}
                userId={userId}
                sameUser={userId === post.user.id}
              />
            ))}
          {!data && <Text>Nenhum tweet encontrado</Text>}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Feed };
