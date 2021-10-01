import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Input = (props)=> {
    return (
        <TextInput {...props} style = {styles.input} />
    )
}

const styles = StyleSheet.create({
input: {
    height:30,
    borderBottomColor: 'black',
    borderBottomWidth:1,
    marginVertical: 10,
    width:50,
    textAlign: 'center',
}
})
export default Input