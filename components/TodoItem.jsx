import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const TodoItem = ({ item, toggleComplete, deleteTodoById }) => {
  return (
    <View style={styles.todoItemWrapper} key={item.id}>
      <View></View>
      <Ionicons
        name={`checkbox${!item.complete ? '-outline' : ''}`}
        color={item.complete ? 'green' : 'grey'}
        onPress={() => toggleComplete(item)}
        size={20}
      />
      <Text style={styles.todoItemText}>{item.text}</Text>
      <Ionicons
        name='trash'
        onPress={() => deleteTodoById(item.id)}
        size={20}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  todoItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderBottom: 1,
    marginBottom: 10,
    paddingBottom: 10,
    
  },
  todoItemText: {
    fontSize: 20,
    flexGrow: 1,
    maxWidth: '80%',
  }
});
