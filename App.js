import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { TodoList } from './components/TodoList';
import { AddTodoItem } from './components/AddTodoItem';
import { TodoFiltersTabs } from './components/TodoFiltersTabs';

export default function App() {
  const [todoList, setTodoList] = useState([])
  const [filters, setFilters] = useState()

  const filtersTodoList = useMemo(() => {
    if (filters === undefined) {
      return todoList
    }

    return todoList.filter(todo => todo.complete === filters)
  }, [filters, todoList])

  const handleAddTodo = (text) => {
    setTodoList(prev => [...prev, {id: prev.length, text, complete: false}])
  }

  const toggleComplete = useCallback((todo) => {
    setTodoList((prev) => {
      prev[todo.id].complete = !prev[todo.id].complete
      return [...prev]
    })
  }, [])

  const deleteTodoById = useCallback((id) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id))
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <AddTodoItem handleAddTodo={handleAddTodo}/>

      <TodoFiltersTabs filter={filters} setFilter={setFilters}/>
      {filters}
      <TodoList deleteTodoById={deleteTodoById} todoList={filtersTodoList} toggleComplete={toggleComplete}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  filterWrapper: {
    flexDirection: 'row',
  },
  filterWrapperItem: {
    flex: 1,
    flexGrow: 1,
    padding: 5,
  },
  filterWrapperItemActive: {
    backgroundColor: "#ccc"
  },
  filterWrapperItemText: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});
