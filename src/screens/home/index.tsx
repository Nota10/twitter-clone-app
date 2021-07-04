import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { homeStyles } from './styles';

const { API_URL } = process.env;

type Data = {
	url: string;
	login: string;
};

export function Home() {
	const [data, setData] = useState<Data | null>(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get(`${API_URL}/orgs/Nota10`);
				console.log('data', data);
				setData(data);
			} catch (error) {
				console.log(error);
			}
		};

		getData();
	}, []);

	return (
		<View style={homeStyles.container}>
			<Text>
				Bem vindo organização {data?.login} {'\n \n'}URL {data?.url} {'\n'}
				diretamente da API do GitHub {'\n \n'}
				Mais detalhes da resposta da API no console
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}
