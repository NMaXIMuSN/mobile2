import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const AddTodoItem = ({handleAddTodo}) => {
  const [textTodo, setTextTodo] = useState('')

  const onPressAdd = () => {
    handleAddTodo(textTodo)
    setTextTodo('')
  }

  return (
    <View style={styles.addTodoItem}>
        <TextInput
          style={styles.addTodoItemInput}
          placeholder="Enter a new todo"
          value={textTodo}
          onChangeText={(text) => setTextTodo(text)}
        />
        <TouchableOpacity 
          style={styles.addTodoItemButton}
          onPress={onPressAdd}
        >
          <Text style={styles.addTodoItemButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
  addTodoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 10,
  },
  addTodoItemInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '80%'
  },
  addTodoItemButton: {
    backgroundColor: '#ccc',
    height: 50,
    width: '20%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTodoItemButtonText: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});
