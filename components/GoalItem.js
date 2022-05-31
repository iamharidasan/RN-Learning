import { View, StyleSheet, Text, Pressable } from "react-native"

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedText}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedText: {
    color: "#2105644",
  },
  goalItemText: {
    padding: 8,
    color: "white",
  },
})

export default GoalItem
