import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const Input = ({placeholder}) => {
    return <TextInput placeholder={placeholder} style={style.input}/>
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
    },
});

export default Input;