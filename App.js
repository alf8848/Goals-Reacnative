import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

// ... (other imports)

export default function App() {
  const [myGoals, setMyGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handleAddGoal(newGoalText) {
    setMyGoals(myCurrentGoals => [
      {
        id: Date.now(),
        text: newGoalText,
      },
      ...myCurrentGoals
    ]);
    setModalVisible(false);
  }

  function handleDeleteGoal(id) {
    setMyGoals(myCurrentGoals =>
      myCurrentGoals.filter(goal => goal.id !== id)
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          onPress={() => setModalVisible(true)}
          color="#b496dc"
        />

        <GoalInput
          onNewGoal={handleAddGoal}
          onCancel={() => setModalVisible(false)}
          visible={modalVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={myGoals}
            renderItem={(dataItem) => (
              <GoalItem
                key={dataItem.item.id}
                goal={dataItem.item}
                onDeleteGoal={handleDeleteGoal}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

// ... (other styles)
const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,
    /*backgroundColor: "#1e085a"*/
  },
  goalsContainer: {
    flex: 5,
  }
})


