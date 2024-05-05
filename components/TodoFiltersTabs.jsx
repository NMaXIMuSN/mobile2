import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const TodoFiltersTabs = ({ filter, setFilter }) => {
  const filtersTabs = useMemo(() => {
    return [
      {
        id: 0,
        text: 'All',
        styles: [styles.filterWrapperItem, filter === undefined && styles.filterWrapperItemActive],
        onPress: () => {setFilter()}
      },
      {
        id: 1,
        text: 'Completed',
        styles: [styles.filterWrapperItem, filter === true && styles.filterWrapperItemActive],
        onPress: () => {setFilter(true)}
      },
      {
        id: 2,
        text: 'Uncompleted',
        styles: [styles.filterWrapperItem, filter === false && styles.filterWrapperItemActive],
        onPress: () => {setFilter(false)}
      },
    ]
  }, [filter])

  return  (
    <View style={styles.filterWrapper}>
      {filtersTabs.map((tab) => (
      <TouchableOpacity 
        key={tab.id}
        style={tab.styles}
        onPress={() => tab.onPress()}
      >
        <Text style={styles.filterWrapperItemText}>{tab.text}</Text>
      </TouchableOpacity>  
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  filterWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
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
