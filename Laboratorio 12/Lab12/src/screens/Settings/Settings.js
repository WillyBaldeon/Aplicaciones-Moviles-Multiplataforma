import React, { Component } from 'react';
import { View, Image, Alert, Text } from 'react-native';
import SettingsList from 'react-native-settings-list';

class Settings extends Component {
	state = {
		switchValue: false
	};
	onValueChange = value => {
		this.setState({ switchValue: value });
	};
	render() {
		return (
			<View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
				<View
					style={{
						borderBottomWidth: 1,
						backgroundColor: '#f7f7f8',
						borderColor: '#c8c7cc'
					}}
				>
					<Text
						style={{
							alignSelf: 'center',
							marginTop: 30,
							marginBottom: 10,
							fontWeight: 'bold',
							fontSize: 16
						}}
					>
						Configuración
					</Text>
				</View>
				<View style={{ flex: 1, marginTop: 50 }}>
					<SettingsList>
						<SettingsList.Header
							headerText="Primer Grupo"
							headerStyle={{ color: '#666' }}
						/>
						<SettingsList.Item
							icon={
								<View
									style={{ height: 30, marginLeft: 10, alignSelf: 'center' }}
								>
									<Image
										style={{ alignSelf: 'center', height: 40, width: 40 }}
                                        source={require('../../../assets/img/icon-profile.png')}
									/>
								</View>
							}
							itemWidth={50}
							title="Icono de Ejemplo"
							onPress={() => Alert.alert('Icono de ejemplo Presionado')}
						/>
						<SettingsList.Item
							hasNavArrow={false}
							switchState={this.state.switchValue}
							switchOnValueChange={this.onValueChange}
							hasSwitch={true}
							title="Ejemplo de Switch"
						/>
						<SettingsList.Item
							title="Ejemplo de otro Color"
							backgroundColor="#D1D1D1"
							titleStyle={{ color: 'blue' }}
							arrowStyle={{ tintColor: 'blue' }}
							onPress={() => Alert.alert('Ejemplo de otro color Presionado!')}
						/>
						<SettingsList.Header
							headerText="Otro Grupo"
							headerStyle={{ color: '#666', marginTop: 50 }}
						/>
						<SettingsList.Item
							titleInfo="Algun Dato"
							hasNavArrow={false}
							title="Dato de Ejemplo"
						/>
						<SettingsList.Item title="Settings 1" />
						<SettingsList.Item title="Settings 2" />
					</SettingsList>
				</View>
			</View>
		);
	}
}

export default Settings;
