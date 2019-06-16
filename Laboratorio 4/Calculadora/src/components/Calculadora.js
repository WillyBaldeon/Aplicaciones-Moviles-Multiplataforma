import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

class Calculadora extends Component{
    
    state = {
        num1: 0,
        num2: 0,
        resp: 0
    }
    
    num1Handler = (texto) => {
        !isNaN(texto)?(
            this.setState({
                num1: texto
            })
        ):(
            this.setState({
                resp: "¡DEBE INGRESAR UN NÚMERO!"
            })
        )
            
    }

    num2Handler = (texto) => {
        if(isNaN(texto)){
            <Text>NEL</Text>
        } else {
            this.setState({
                num2: texto
            });
        }        
    }

    sumar = () => {
        this.setState({
            resp: parseInt(this.state.num1) + parseInt(this.state.num2)
        });
    }

    restar = () => {
        this.setState({
            resp: parseInt(this.state.num1) - parseInt(this.state.num2)
        });
    }

    multiplicar = () => {
        this.setState({
            resp: parseInt(this.state.num1) * parseInt(this.state.num2)
        });
    }

    dividir = () => {
        this.setState({
            resp: parseInt(this.state.num1) / parseInt(this.state.num2)
        });
    }

    render(){
        return (
            <View>
                <TextInput
                    placeholder="Número 1"                                         
                    onChangeText={this.num1Handler}/>

                <TextInput
                    placeholder="Número 2" 
                    onChangeText={this.num2Handler}/>

                <Button
                    title="SUMAR"
                    onPress={this.sumar}/>
                <Button
                    title="RESTAR"
                    onPress={this.restar}
                    color="#009bff"/>
                <Button
                    title="MULTIPLICAR"
                    onPress={this.multiplicar}
                    color="#ed4bf9"/>
                <Button
                    title="DIVIDIR"
                    onPress={this.dividir}
                    color="#7cd426"/>
                <Text>{this.state.resp}</Text>

            </View>
        );
    }
}
  
export default Calculadora;