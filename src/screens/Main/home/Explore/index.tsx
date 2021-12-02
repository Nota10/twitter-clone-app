import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, TextInput, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';

import { Tweet } from '../../../../components/Tweet';
import { exploreStyles } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import { api } from '../../../../services/api';
import { useThemeObject } from '../../../../hooks/theme.hook';
import { feedStyles } from '../Feed/styles';
import { getUserid } from '../../../../services/auth';
// import { ThemeContext } from '../../../../utils/ThemeHandler';
// import { colors } from '../../../../global/colors';

const Explore = () => {
  const [data, setData] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const styles = useThemeObject(feedStyles);
  const userId = getUserid();
  const [searchText, setSearchText] = useState('');

  const getData = async () => {
    try {
      const { data } = await api.authGet('/tweet');
      setData(data);
    } finally {
      setLoading(false);
    }
  };

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
    getData();
  }, []);

  // const context = useContext(ThemeContext);

  return (
    <View
      style={[
        exploreStyles.container,
        // { backgroundColor: colors[`darkest${context.theme}`] },
      ]}
    >
      <Header title="Explorar" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Spinner
            visible={loading}
            textContent="Carregando..."
            textStyle={styles.formText}
          />
          <View style={styles.formContainer}>
            <TextInput placeholderTextColor="#fff" style={styles.formInput} maxLength={80} placeholder="Pesquisar..." onSubmitEditing={() => {console.log('Enviando...')}} onChangeText={text => setSearchText(text)} />
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

export { Explore };
