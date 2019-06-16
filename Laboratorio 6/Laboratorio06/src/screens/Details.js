import React from "react";
import { View, Text, Button } from "react-native";

class DetailsScreen extends React.Component {

    goProfileHandler = () => {
        this.props.navigation.navigate('Profile', {
          username: 'Willy Baldeón'
        })
    }

    render(){
      return (
        <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Button
            title="Volver al Inicio"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Ver Perfil"
            onPress={this.goProfileHandler}
          />
        </View>
        );
    }
}

export default DetailsScreen;
