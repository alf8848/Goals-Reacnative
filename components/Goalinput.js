import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';

export default function GoalInput({ onNewGoal, visible, onCancel }) {
  const [newGoal, setNewGoal] = useState("");

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function onPressHandler() {
    if (newGoal) {
      onNewGoal(newGoal)
    }
    setNewGoal("");
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/img/goal.png")}
          style={styles.goalImg}
        />
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          value={newGoal}
          placeholder='Input your Goal!!'
        />
        <View style={styles.buttonContainer}>

          <View style={styles.button}>
            <Button
              color="#b496dc"
              title='Cancel'
              onPress={() => onCancel()}
            />
          </View>

          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={onPressHandler}
              color="#b496dc"
            />
          </View>

        </View>

      </View>
    </Modal>
  )
}

const styles = new StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    alignItems: 'center',
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "80%",
    borderRadius: 15,
    padding: 20
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: '40%'
  },
  goalImg: {
    width: 120,
    height: 120,
    margin: 20
  }

})


