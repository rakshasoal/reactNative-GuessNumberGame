import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return (generateRandomBetween(min, max, exclude))
    }
    else {
        return randomNumber;
    }
}

const MainGame = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    const currentHigh = useRef(100);
    const currentLow = useRef(1);
    const [rounds, setRounds] = useState(0);
const {userChoice, onGameOver} = props

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds)
        }
    },[currentGuess,userChoice,onGameOver])
    
    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)) {
            console.log("'wrong hint','honesty is the best policy'")
            Alert.alert('wrong hint', 'honesty is the best policy', [{ text: 'sorry', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }
        else {
            currentLow.current = currentGuess
        }
        const number = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(number)
        setRounds(currentRounds => currentRounds + 1)
    }
    console.log("Guess = ", currentGuess)

    console.log("Low = ", currentLow)

    console.log("high = ", currentHigh)

    return (
        <View style={styles.screen}>
            <Text>OPPONENT GUESS</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
                <Button title="Lower" width='100' onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="Higher" width='100' onPress={nextGuessHandler.bind(this, 'higher')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})
export default MainGame
