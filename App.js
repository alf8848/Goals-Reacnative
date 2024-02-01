import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function App() {

  // Declaramos el hook de estado de componente "newGoal"
  const [newGoal, setNewGoal] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
    console.log(enteredText); // Cambiado de "newGoal" a "enteredText"
  }

  function addGoalHandler() {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, newGoal]);
    setNewGoal(""); // Limpiar el campo después de agregar un objetivo
    console.log(myGoals);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Agregamos la propiedad "value" al TextInput y pasamos el valor de "newGoal" */}
        <TextInput
          style={styles.textInput}
          placeholder='Input your Goal: '
          onChangeText={textChangeHandler}
          value={newGoal}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Your list of goals...</Text>
        {myGoals.map((goal, i) => {
          return (
            <View key={i}>
              <Text>{goal}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    marginBottom: 10,
  },
  goalsContainer: {
    width: '80%',
    alignItems: 'center',
  },
});
