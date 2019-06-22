import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import IconBox from '../../components/UI/IconBox';

import { styles } from '../../styles/global';

import imgCampus from '../../../assets/img/arequipa.jpg'

export default class HomeScreen extends React.Component {

	state = {
		userName: ''
	};
	static navigationOptions = {
		title: '¡Bienvenido a la App!',
		tabBarIcon: ({ focused, horizontal, tintColor}) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor}/>;
		}
	};
	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		this.setState({ userName: userName });
	};
	go2Chat = () => {
		this.props.navigation.navigate('Chat');
	};
	go2Profile = () => {
		this.props.navigation.navigate('Profile');
	};
	go2Lists = () => {
		this.props.navigation.navigate('Lists');
	};
	go2Settings = () => {
		this.props.navigation.navigate('Settings');
	};
	logoutHandler = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	render() {
		return (
			<ScrollView>
				<Image source={imgCampus} />
				<Text style={styles.title}>Bienvenido {this.state.userName}</Text>
				<View style={styles.iconContainer}>
					<IconBox
						value={'Chat'}
						label={'¡Vamos a conversar!'}
						icon={require('../../../assets/img/icon-chat.png')}
						onPress={this.go2Chat}
					/>
					<IconBox
						value={'Perfil'}
						label={'Mi Usuario'}
						icon={require('../../../assets/img/icon-profile.png')}
						onPress={this.go2Profile}
					/>
					<IconBox
						value={'Listados'}
						label={'Productos, etc'}
						icon={require('../../../assets/img/icon-list.png')}
						onPress={this.go2Lists}
					/>
				</View>
				<View style={styles.iconContainer}>
					<IconBox
						value={'Config'}
						label={'Mis utilidades'}
						icon={require('../../../assets/img/icon-settings.png')}
						onPress={this.go2Settings}
					/>
					<IconBox
						value={'Salir'}
						label={'Cerrar Session'}
						icon={require('../../../assets/img/icon-logout.png')}
						onPress={this.logoutHandler}
					/>
				</View>
			</ScrollView>
		);
	}
}
