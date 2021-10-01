import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen'
import MainGame from './Screens/MainGame';
import GameOverScreen from './Screens/GameOverScreen';

const App =() => {
  const [userNumber,setUserNumber]= useState('')
const [rounds, setRounds]= useState(0);

const restartGameagain = () =>{
  setRounds(0)
  setUserNumber(null)
}
  const startGameButtonHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setRounds(0)
  }
const GameOverHandler = rounds =>{
  setRounds(rounds)
}
  let content = <StartGameScreen onStartGame={startGameButtonHandler} ></StartGameScreen>
  if(userNumber && rounds<=0){
    content = <MainGame userChoice = {userNumber} onGameOver = {GameOverHandler}/>
  } else if(rounds>0){

  content = <GameOverScreen rounds = {rounds} rightNumber = {userNumber} onRestartGame = {restartGameagain}></GameOverScreen>
  }

  return (
    <View style = {styles.screen}>
      <Header title = "GUESS A NUMBER" /> 
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
    flex: 1
  }
})

export default App
