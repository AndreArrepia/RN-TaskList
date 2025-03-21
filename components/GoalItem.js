import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  const { onDeleteItem, text, id } = props;
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => onDeleteItem(id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: "white",
  },
});
