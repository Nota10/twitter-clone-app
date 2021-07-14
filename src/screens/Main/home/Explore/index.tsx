import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, Text, View, Image,  Alert, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '../../../../global/theme';
import COLORS from '../../../../global/colors';
import { Header } from '../../../../components/Header';

import { Tweet } from '../../../../components/Tweet';

const Explore = () => {
  const [data, setData] = useState<Array<any>>([<Text style={{color: COLORS.white, padding:25}}>Carregando...</Text>]);

  useEffect(() => {
    const getData = async () => {
      try {
        //const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        // setData(data);
        const { data } = await axios.get(`https://reqres.in/api/users`);
        var posts = data.data.reduce((acc:Array<any>, user:any) => {
          let post = {
            id:   user.id,
            body: 'Tweet fake',
            userName: user.first_name,
            userTag: `@${user.last_name}`,
            avatarUrl: user.avatar
          }
          acc.push( <Tweet key={post.id} post={post}/> );
          return acc;
        }, []);
        setData(posts);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <View style={{...theme.container, backgroundColor:COLORS.secondary_darkest }}>
      <Header title='Explorar' />
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ width: '100%', alignContent:'center', justifyContent:'center', backgroundColor:COLORS.secondary_darkest}}>
          {data}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export {Explore};
