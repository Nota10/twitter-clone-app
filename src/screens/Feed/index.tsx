import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, Text, View, Image, FlatList, Modal, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '../../global/theme';
import COLORS from '../../global/colors';
import { RectButton } from 'react-native-gesture-handler';

const { API_URL } = process.env;

type Data = {
  url: string;
  login: string;
};

const Feed = ({navigation, user}) => {
  const [data, setData] = useState<Array<any>>([]);
  const [modalVisible, setModalVisible] = useState<Boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        //const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        // setData(data);
        console.log('\nFetching posts...');
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        var posts = data.reduce((acc, post, index, list) => {
          acc.push(
            <View key={post.id} style={{ ...theme.container, backgroundColor:COLORS.darkPurple, padding: 25, marginVertical: 10}}>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', alignContent:'flex-start'}}>
                <View style={{width:'20%'}}>
                <Image
                  style={{ width: 50, height: 50,}}
                  source={require('../../../assets/logo.png')}
                />
                </View>
                <View style={{display:'flex', flexDirection:'column', width:'80%'}}>
                  <View style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color:COLORS.white }}>Francis </Text>
                    <Text style={{ fontSize: 18, color:COLORS.lightPurple }}>@User_0{post.userId} • 1h</Text>
                  </View>
                  <Text style={{ fontSize: 18, color:COLORS.white, marginBottom: 5}}>{post.body}</Text>
                  <Text style={{ fontSize: 18, color:COLORS.yellow}}>#Bergamota #OvoFrito #Hashtag</Text>
                </View>
              </View>
            </View>
          );
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
    <View style={{...theme.container, backgroundColor:COLORS.darkestPurple }}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ width: '100%', alignContent:'center', justifyContent:'center', backgroundColor:COLORS.darkestPurple}}>
          <View style={{width: '100%', alignItems:'center', borderTopWidth: 0, backgroundColor:COLORS.darkPurple, paddingBottom: 40, marginBottom: 10, elevation: 1}}>
            <Text style={{ ...theme.lead_text, marginTop: 50, fontSize: 24, color:COLORS.white }}>Bem-vindo {user.name}, aqui está o seu feed :)</Text>
            <RectButton style={theme.button} onPress={() => setModalVisible(true)}>
              <Text style={theme.button_text}>Sair</Text>
            </RectButton>
          </View>
          {data}
        </ScrollView>
      </SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{width: '100%', height:'100%', alignItems:'center', borderTopWidth: 0, backgroundColor:COLORS.darkestPurple, marginBottom: 10, elevation: 1}}>
          <Text style={{ ...theme.lead_text, marginTop: 50, fontSize: 24, color:COLORS.white }}>Tem certeza de que deseja sair?</Text>
          <RectButton style={{ ...theme.button, backgroundColor:COLORS.darkPurple}}>
            <Text style={theme.button_text}>Sim, quero sair</Text>
          </RectButton>
          <RectButton style={{ ...theme.button, backgroundColor:COLORS.darkYellow, marginTop: 25}} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={theme.button_text}>Voltar</Text>
          </RectButton>
        </View>
      </Modal>
    </View>
  );
}

export {Feed};
