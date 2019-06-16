import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ToastAndroid,
    KeyboardAvoidingView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imgBackground from '../../assets/img/background-login.jpg';
import { Fumi } from 'react-native-textinput-effects';
import axios from '../../lib/axios';
import Icon from 'react-native-ionicons';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Registrarse',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            return <Ionicons name="ios-contact" size={25} color={tintColor} />
        }
    };

    state = {
        user: '',
        name: '',
        password: '',
        password2: '',
        loading: false,
        showPassword: false,
        showPassword2: false,
    };

    showPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });        
    };

    showPassword2 = () => {        
        this.setState({ showPassword2: !this.state.showPassword2 });
    };
        
    inputHandler = (field, value) => {
        this.setState({ [field]: value });
    };

    onSubmitHandler = () => {
        if (this.state.user === '' ||
            this.state.name === '' ||
            this.state.password === '' ||
            this.state.password2 === ''){
            return ToastAndroid.showWithGravity(
                '¡Faltan datos!',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
            );
        }

        if (this.state.password !== this.state.password2){
            return ToastAndroid.showWithGravity(
                'Las contraseñas no coinciden',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
            );
        }


        this.setState({ loading: true });
        axios({
            method: 'POST',
            url: 'api/user/signup',
            data: {
                email: this.state.user,
                username: this.state.name,
                password: this.state.password
            }
        })

            .then(async response => {
                ToastAndroid.showWithGravity(
                    response.dataToastAndroid.LONG,
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
                await AsyncStorage.setItem('userToken', response.data.token);
                this.props.navigation.navigate('App');
            })

            .catch(err => {
                ToastAndroid.showWithGravity(
                    'Hubo un error en el registro',
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
                console.warn(err);
                this.setState({ loading: false });
            });        
    };

    loginHandler = () => {
        this.props.navigation.navigate('SignIn');
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={imgBackground}
                    style={{ width: '100%', height: '100%' }}
                >
                    <KeyboardAvoidingView
                        behavior="position"
                        style={{ justifyContent: 'center' }}
                        enabled
                    >                    
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 48,
                                color: '#fff'
                            }}
                        >
                            Tecsup Videos
                        </Text>
                        <View style={{ padding: 10 }}>
                            <View style={{ marginTop: 10 }}>
                                <Fumi
                                    style={{
                                        backgroundColor: '#46494f',
                                        opacity: 0.8,
                                        marginBottom: 10
                                    }}
                                    label={'Usuario'}
                                    iconClass={Ionicons}                                    
                                    onChangeText={text => this.inputHandler('name', text)}
                                    value={this.state.name}
                                    iconName={'ios-person'}
                                    iconColor={'#fff'}
                                    labelStyle={{ color: '#fff' }}
                                    iconSize={30}
                                    iconWidth={40}
                                    inputPadding={16}
                                />
                            </View>

                            <View>
                                <Fumi
                                    style={{
                                        backgroundColor: '#46494f',
                                        opacity: 0.8,
                                        marginBottom: 10
                                    }}
                                    label={'Correo electrónico'}
                                    iconClass={Ionicons}
                                    keyboardType="email-address"
                                    onChangeText={text => this.inputHandler('user', text)}
                                    value={this.state.user}
                                    iconName={'ios-mail'}
                                    iconColor={'#fff'}
                                    labelStyle={{ color: '#fff' }}
                                    iconSize={30}
                                    iconWidth={40}
                                    inputPadding={16}
                                />
                            </View>
                            
                            <View style={{ flexDirection: 'row' }}>
                                <Fumi
                                    style={{
                                        width: '84%',
                                        backgroundColor: '#46494f',
                                        opacity: 0.8,                                        
                                    }}
                                    label={'Contraseña'}
                                    iconClass={Ionicons}
                                    iconName={'ios-key'}
                                    iconColor={'#fff'}  
                                    labelStyle={{ color: '#fff' }}
                                    onChangeText={text => this.inputHandler('password', text)}                                
                                    secureTextEntry={!this.state.showPassword}
                                    value={this.state.password}
                                    iconSize={30}
                                    iconWidth={40}
                                    inputPadding={16}
                                />

                                <Icon
                                    color="#fff"
                                    style={{
                                        padding: 20,
                                        alignItems: 'center',
                                        backgroundColor: '#46494f',
                                        opacity: 0.8,
                                        height: 65
                                    }}
                                    size={25}
                                    name={this.state.showPassword ? 'md-eye' : 'md-eye-off'}
                                    onPress={this.showPassword}
                                />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Fumi
                                    style={{
                                        width: '84%',
                                        backgroundColor: '#46494f',
                                        opacity: 0.8,                                        
                                    }}
                                    label={'Confirmar contraseña'}
                                    iconClass={Ionicons}
                                    iconName={'ios-key'}
                                    iconColor={'#fff'}  
                                    labelStyle={{ color: '#fff' }}
                                    onChangeText={text => this.inputHandler('password2', text)}                                
                                    secureTextEntry={!this.state.showPassword2}
                                    value={this.state.password2}
                                    iconSize={30}
                                    iconWidth={40}
                                    inputPadding={16}
                                />

                                <Icon
                                    color="#fff"
                                    style={{
                                        padding: 20,
                                        alignItems: 'center',
                                        backgroundColor: '#46494f',
                                        opacity: 0.8,
                                        height: 65
                                    }}
                                    size={25}
                                    name={this.state.showPassword2 ? 'md-eye' : 'md-eye-off'}
                                    onPress={this.showPassword2}
                                />
                            </View>

                            <TouchableOpacity
                                onPress={this.onSubmitHandler} 
                                style={{
                                    marginTop: 20,
                                    padding: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 25,
                                    backgroundColor: '#dcdcdc'
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#46494f',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Registrar Cuenta
                                </Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center'
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 14 }}>
                                    ¿Ya tienes una cuenta?
                                    <Text
                                        onPress={this.loginHandler}
                                        style={{
                                            color: '#fff',
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {' '}
                                        Inicia sesión aquí
                                    </Text>
                                </Text>
                            </View>
                        </View>       
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}

