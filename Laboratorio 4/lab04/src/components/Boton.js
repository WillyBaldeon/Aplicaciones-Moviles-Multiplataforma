import React,{Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

class Boton extends Component{
    state = {
        valor: this.props.valor
    }
    
    componentDidUpdate(oldProps, oldState){
        if(oldProps.valor!==this.props.valor && !isNaN(this.props.valor)){
            this.setState({
            valor: this.props.valor
            });
        }
    }

    disminuirHandler = () => {
        this.setState({
            valor: this.state.valor - 1
        });
    }

    incrementarHandler = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render(){
        return (<View>
            <Button
                title='Disminuir'
                onPress={this.disminuirHandler}
                />
        </View>);
    }
}

export default Contador;