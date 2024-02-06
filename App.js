import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  // declaramos el hook de estado de componente "newGoal"
  const [myGoals, setMyGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(newGoalText) {
    setMyGoals(myCurrentGoals => [{
      id: Date.now(),
      text: newGoalText,
    }, ...myCurrentGoals
    ]);
    setModalVisible(false);
  }
  function onDeleteGoalHandler(id) {
    setMyGoals((myCurrentGoals) => {
      return myCurrentGoals.filter((goal) => goal.id != id)
    })

  }


  return (

    <>
      <StatusBar style='light' />
      <View style={styles.container}>


        <Button
          title='Add New Goal'
          onPress={() => setModalVisible(true)}
          color="#b496dc"
        />

        <GoalInput
          onNewGoal={addGoalHandler}
          onCancel={() => setModalVisible(false)}
          visible={modalVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={myGoals}
            renderItem={(dataItem) => (
              <GoalItem
                key={dataItem.item.id} ç
                goal={dataItem.item}
                onDeleteGoal={onDeleteGoalHandler}
              />
            )
            }
          />
        </View>
      </View>
    </>
  );
}

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


