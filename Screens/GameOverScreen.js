import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const GameOverScreen = (props) => {
    return (
    <View style = {styles.screen}>
    <Text>Guessed Correctly - {props.rightNumber} GAME IS OVER. </Text>
<Text>Number of Rounds: {props.rounds}</Text>
<Button title = "Start New Game" onPress = {props.onRestartGame} ></Button>
    </View>

    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:"center"
}
})
export default GameOverScreen

