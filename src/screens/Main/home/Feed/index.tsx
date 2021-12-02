import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';

import { api } from '../../../../services/api';
import { Tweet } from '../../../../components/Tweet';
import { feedStyles } from './styles';
import { useThemeObject } from '../../../../hooks/theme.hook';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { getToken, getUserid } from '../../../../services/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const Feed: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);

  const styles = useThemeObject(feedStyles);

  const [loading, setLoading] = useState(false);

  const [tweetText, setTweetText] = useState('');

  const userId = getUserid();

  const getData = async () => {
    try {
      const { data } = await api.authGet('/feed');
      setData(data);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {

    if(tweetText.split(' ').length < 3) {
      return Alert.alert(
        'Ops!',
        'Digite ao menos três palavras para poder enviar!'
      );
    }

    try {
      setLoading(true);
      api.authPost('/tweet', {
        title: tweetText,
        body: tweetText
      }).finally(() => {
        setTweetText('');
        getData();
      });
    }  catch(error) {
      console.log(error);
      Alert.alert('Ops!', 'Houve um erro ao publicar! Tente novamente mais tarde!');
    }
  }

  const handleTweetAction= async (action:String, tweetId:any) => {
    switch(action) {
      case 'expand':
        console.log('Expandindo...')
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
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Últimos Tweets" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Spinner
            visible={loading}
            textContent="Carregando..."
            textStyle={styles.formText}
          />
          <View style={styles.formContainer}>
            <Text style={styles.formText}>
              O que tem te deixado pistola?
            </Text>
            <TextInput style={styles.formInput} multiline={true} numberOfLines={4} maxLength={280} onChangeText={text => setTweetText(text)} />
            <RectButton
              style={styles.button}
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </RectButton>
          </View>
          {data && (data.map(post => (
            <Tweet key={post._id} post={post} executeAction={handleTweetAction} loading={loading} userId={userId} />
          )))}
          {!data && (
            <Text>Nenhum tweet encontrado</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Feed };
