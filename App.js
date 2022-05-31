import { useState } from "react"
import { StyleSheet, View, Button, FlatList } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"
import { StatusBar } from "expo-status-bar"

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([])
  const [modalStatus, setModalStatus] = useState(false)

  const addGoalHandler = (text) => {
    setListOfGoals((prevState) => {
      return [...prevState, { text: text, id: Math.random().toString() }]
    })
  }

  const removeGoalHandler = (id) => {
    setListOfGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id)
    })
  }

  const modalOpener = () => {
    setModalStatus(true)
  }

  const modalCloseHandler = () => {
    setModalStatus(false)
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={modalOpener} />
        <GoalInput
          buttonHandler={addGoalHandler}
          modalStatus={modalStatus}
          closeModal={modalCloseHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={removeGoalHandler}
                  id={itemData.item.id}
                />
              )
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 15,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
})
