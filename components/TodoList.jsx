import { FlatList, StyleSheet, Text, View } from "react-native";
import { TodoItem } from "./TodoItem";

export const TodoList = ({todoList, toggleComplete, deleteTodoById}) => {
  return (
    <FlatList
      data={todoList}
      renderItem={({item}) => (
        <TodoItem item={item} deleteTodoById={deleteTodoById} toggleComplete={toggleComplete}/>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

