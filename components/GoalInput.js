import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

const GoalInput = ({ buttonHandler, modalStatus, closeModal }) => {
  const [enteredText, setEnteredText] = useState("")

  const inputHandler = (text) => {
    setEnteredText(text)
  }

  const addGoalHandler = () => {
    buttonHandler(enteredText)
    setEnteredText("")
    closeModal()
  }

  const closeModalHandler = () => {
    closeModal()
  }

  return (
    <Modal visible={modalStatus} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={inputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#00aa00" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={closeModalHandler}
              title="Cancel"
              color="#aa0000"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e0acc",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})

export default GoalInput
