import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    // When data depends on the current state (courseGoals) you should access to callback function in order to grant a constant state
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== id);
    });
    endAddGoalHandler();
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        {/* inputs */}
        <Button
          title={"Add New Goal"}
          color="#e4d0ff"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          modalIsVisible={modalIsVisible}
          endAddGoalHandler={endAddGoalHandler}
        />
        {/* labels */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              // item its the single value from the data prop
              const { item } = itemData;
              return (
                <GoalItem
                  text={item.text}
                  id={item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            // tell flatList how to get the key from the item, you ca  set the default by having a key prop
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
