import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';

const people = [
  {name: 'Hernando', lastname: 'Bellido'},
  {name: 'Manuel', lastname: 'Ramirez'},
  {name: 'Sandra', lastname: 'Alvarez'},
  {name: 'Milagros', lastname: 'Romero'},
  {name: 'Alexandro', lastname: 'Ramos'}
]

type Props = {};
export default class App extends Component<Props> {

  state = {
    loading: false,
    data: [],
    text: ''
  }

  componentDidMount(){
    this.setState({ loading: true });
    axios({
      method: 'GET',
      url: 'https://yts.am/api/v2/list_movies.json'
    }).then(response => {
      this.setState({
        loading: false,
        data: response.data.data.movies
      });
    }).catch(err => {
      this.setState({loading: false});
      console.warn(err);
    })
  }

  onPressHandler = item => {
    alert(item.description_full);
  }

  renderHeader = () => {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.searchHandler}
        value={this.state.text}
      />
    );
  }

  searchHandler = text => {
    this.setState({
      text: text
    }, () => {
      const newData = people.filter(item => {
        const itemData = `${item.title_long}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        data: newData
      });    
    });
  }
 
  render() {
    let contenido = (
      <Text>
        Cargando, espere por favor...
      </Text>);

    if(!this.state.loading){
      contenido = (
        <FlatList
          keyExtractor={(item, index) =>index+''}
          data={this.state.data}
          renderItem={({item, index}) => {
            return (
            <TouchableOpacity onPress={() => this.onPressHandler(item)}>
              <Text style={index%2===0?styles.ItemEven:styles.ItemUneven}>
                {item.title_long}
              </Text>
            </TouchableOpacity>);
          }}
          ListHeaderComponent={this.renderHeader}
        />
      );
    }
    return (
      <View>
        {contenido}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ItemEven: {
    color: '#2B4B6F'
  }, 
  ItemUneven:{
    backgroundColor: '#D46A6A',
    color: 'white'
  }
});
