/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
    return (
        <View>
            <Text style={header.input}> {text} </Text>
        </View>
    );
};

const header = StyleSheet.create({
    input: {
        fontSize: 35, 
        color: 'black', 
        fontWeight:'bold', 
        textAlign:'left',
        paddingBottom: 30,
        marginLeft:10,
        marginTop:15,
    },
});

export default Title;