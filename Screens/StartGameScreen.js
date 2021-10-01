import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button ,Alert} from 'react-native'
import Card from '../Components/Card'
import Colors from '../Components/constants/Colors'
import Input from '../Components/Input'
import NumberContainer from '../Components/NumberContainer'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed]= useState(false);
    const [selectedValue, setSelectedValue]= useState('')

    const inputHandler = inputText => {
        // console.log("is it a number", inputText);
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    // console.log(enteredValue, 'entered value')

    const resetButtonHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

      // Alert is not working. why?
    const confirmButtonHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber>99){    

            console.log("invalid entry")
            Alert.alert("invalid entry","invalid entry",[{text:"okay", style:"cancel", onPress:resetButtonHandler }])
            return; 
        }
        setSelectedValue(chosenNumber)
        setEnteredValue('');
        setConfirmed(true);

    }
    let confirmedOutput;
if(confirmed){
confirmedOutput = <Card style = {styles.summaryContainer}>
    <Text>Confirmed Number is </Text>
   <NumberContainer> {selectedValue} </NumberContainer>
    <Button title = "Start Game Now" color= {Colors.accent} onPress = {()=> props.onStartGame(selectedValue)} /></Card>
}
    return (
        <View style={styles.screen}>
            <Text style={styles.title}> START A NEW GAME </Text>

            <Card style={styles.inputContainer}>

                <Text>Select a number</Text>

                <Input style=
                    {styles.input}
                    blurOnSubmit
                    autoCapitalize='None'
                    autoCorrect={false}
                    maxLength={2}
                    onChangeText={inputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.singleButton}>  <Button title="RESET" onPress={resetButtonHandler} color={Colors.primary} /></View>
                    <View style={styles.singleButton}> <Button title="CONFIRM" onPress={confirmButtonHandler} color={Colors.accent} /></View>


                </View>
            </Card>
            {confirmedOutput}
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    singleButton: {
        width: 100

    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input: {
        width: 50
    },
    summaryContainer: {
        marginTop:20,
        alignItems:"center",

    }
})
export default StartGameScreen
