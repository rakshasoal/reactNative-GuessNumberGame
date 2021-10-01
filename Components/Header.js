import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Colors from './constants/Colors'

const Header = props => {
    return (
       <View style = {styles.header}>
           <Text style = {styles.textBox}>{props.title}</Text>
       </View>
    )
}
const styles = StyleSheet.create({
header: {
width:'100%',
height:90,
padding:36,
backgroundColor: Colors.header,
justifyContent:'center',
alignItems:'center'
},
textBox: {
    color:'black',
    fontSize:18
}
})

export default Header
