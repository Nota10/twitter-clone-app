import 'react-native-gesture-handler';

import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Text,
  Alert,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../../../components/Header';
import { UserItem } from '../../../../components/UserItem';

import { Tweet } from '../../../../components/Tweet';
import { exploreStyles } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import { api } from '../../../../services/api';
import { useThemeObject } from '../../../../hooks/theme.hook';
import { getUserid } from '../../../../services/auth';
import { useNavigation } from '@react-navigation/native';
// import { ThemeContext } from '../../../../utils/ThemeHandler';
// import { colors } from '../../../../global/colors';

const Explore = ({ handleProfileAction }: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('undefined');
  const styles = useThemeObject(exploreStyles);
  const userId = getUserid();
  const [searchText, setSearchText] = useState('');

  const getMode = (text: string) => {
    text = text.trim();

    const char = text[0];
    switch (char) {
      case '@':
        return 'users';
      case '#':
        return 'tweets';
      default:
        return 'undefined';
    }
  };

  const getData = async () => {
    if (searchText.length === 0) {
      return;
    }

    setLoading(true);
    setData([]);
    setMode(getMode(searchText));

    if (getMode(searchText) == 'undefined') {
      setLoading(false);
      return Alert.alert(
        'Ops! Pesquisa inválida!',
        'Sua pesquisa deve começar com @ para procurar um usuário ou # para procurar uma hashtag.'
      );
    } else {
      try {
        const { data } = await api.authPost('/search', { search: searchText });
        setData(data);
        setLoading(false);
      } finally {
        setLoading(false);
      }
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

  const componentMapping = () => {
    let ret;
    switch (mode) {
      case 'tweets':
        ret = data.map((post, index) => (
          <Tweet
            key={`explore_tweet_${index}`}
            post={post}
            executeAction={handleTweetAction}
            loading={loading}
            userId={userId}
          />
        ));
        break;
      case 'users':
        ret = data.map((post, index) => (
          <UserItem
            key={`explore_user_${index}`}
            post={post}
            executeAction={handleProfileAction}
            loading={loading}
            userId={userId}
          />
        ));
        break;
      default:
        ret = (
          <Text style={styles.searchText}>
            Pesquise por @NomeUsuário ou #Hashtag
          </Text>
        );
        break;
    }
    return ret;
  };

  useEffect(() => {
    // setLoading(true);
    getData();
  }, []);

  // const context = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
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
            <TextInput
              placeholderTextColor="#fff"
              style={{ ...styles.formInput, width: '100%' }}
              maxLength={80}
              placeholder="Pesquisar..."
              onSubmitEditing={() => {
                getData();
              }}
              onChangeText={setSearchText}
            />
          </View>
          {componentMapping()}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export { Explore };
