import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import { Colors } from './constants/Colors'

const NumberContainer = props => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.number}>{props.children}</Text>
            </View>
    )
}
// this is not taking color from the color file. why?
const styles = StyleSheet.create({
    container:{
        // borderColor : Colors.header,
        borderWidth:2,
        borderColor : '#F39200',
        padding:20,
        borderRadius:10,
        marginVertical: 10,
        alignItems:"center",
        justifyContent:"center"
    },

    number: {
        // color: Colors.primary,
        color:'#ff7643',
        fontSize:22
    }
})
export default NumberContainer