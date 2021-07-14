import 'react-native-gesture-handler';

import axios from 'axios';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '../../../global/theme';
import COLORS from '../../../global/colors';
import { Header } from '../../../components/Header';

const Profile = ({ route }) => {
  const [data, setData] = useState<Array<any>>([<Text style={{color: COLORS.white, padding:25}}>Carregando...</Text>]);

  useEffect(() => {
    const getData = async () => {
      try {
        //const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
        // setData(data);
        console.log('\nFetching posts...');
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.user.id}`);
        var profile = [(
          <View key={`profile`} style={{display:'flex', height:'80%', width:'100%', justifyContent:'space-evenly', flexDirection:'column', padding:'50', backgroundColor:COLORS.secondary_dark}}>
            <View>            
              <Text style={{ fontSize: 18, color: COLORS.white, fontWeight:'bold'}}>Nome:</Text>
              <Text style={{ fontSize: 16, color: COLORS.white}}>{data.name} </Text>
            <View>
            </View>
              <Text style={{ fontSize: 18, color: COLORS.white, fontWeight:'bold'}}>Email:</Text>
              <Text style={{ fontSize: 16, color: COLORS.white}}>{data.email} </Text>
            <View>
            </View>
              <Text style={{ fontSize: 18, color: COLORS.white, fontWeight:'bold'}}>Telefone:</Text>
              <Text style={{ fontSize: 16, color: COLORS.white}}>{data.phone} </Text>
            <View>
            </View>
              <Text style={{ fontSize: 18, color: COLORS.white, fontWeight:'bold'}}>Website:</Text>
              <Text style={{ fontSize: 16, color: COLORS.white}}>{data.website} </Text>
            </View>
          </View>
        )];
        setData(profile);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <View style={{...theme.container, backgroundColor:COLORS.secondary_darkest }}>
      <Header title='Perfil' />
      {data}
    </View>
  );
}

export {Profile};
