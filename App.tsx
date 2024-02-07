import React from 'react'; 
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import kosongDua from './pic/prabowo.jpg';
import kosongSatu from './pic/anis.jpg';
import kosongTiga from './pic/ganjar.jpg';
import Title from './src/componens/Title';
import Input from './src/componens/Input';

const App = () => {
  return (
    <View>
      <Title text="Basic RN"/>
      <Title text="Basic reactNative"/>
      <ScrollView>
        <Input placeholder='Input your name'/>
        <Input placeholder='Input your number'/>
        <Image source={kosongSatu} style={imageStyle.input}/>
        <Image source={kosongDua} style={imageStyle.input}/>
        <Image source={kosongTiga} style={imageStyle.input}/>
      </ScrollView>
    </View>
  );
};

const imageStyle = StyleSheet.create({
  input:{
    width: 380,
    height: 380,
  },
})

export default App;