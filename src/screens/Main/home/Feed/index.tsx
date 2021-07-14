import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '../../../../global/theme';
import COLORS from '../../../../global/colors';
import { Header } from '../../../../components/Header';

import { Tweet } from '../../../../components/Tweet';

const Feed = ({user}) => {
  const [data, setData] = useState<Array<any>>([<Text style={{color: COLORS.white, padding:25}}>Carregando...</Text>]);

  useEffect(() => {
    const getData = async () => {
      try {
        //const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        // setData(data);
        console.log('\nFetching posts...');
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        setData(data);
        // var posts = data.reduce((acc:Array<any>, post:any) => {
        //   acc.push( <Tweet key={post.id} post={post}/> );
        //   return acc;
        // }, []);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <View style={{...theme.container, backgroundColor:COLORS.secondary_darkest }}>
      <Header title='Últimos Tweets' />
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ width: '100%', alignContent:'center', justifyContent:'center', backgroundColor:COLORS.secondary_darkest}}>
          {data.map((post) => (<Tweet key={post.id} post={post} />))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export {Feed};
