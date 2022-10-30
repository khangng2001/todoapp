import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandbox';


export default function App() {
  
  const [todos, setTodos] = useState([
    {text: 'clean floor', key: '1'},
    {text: 'cooking', key: '2'},
    {text: 'listen to music', key: '3'},
    {text: 'take a shower', key: '4'},
    {text: 'watching tv', key: '5'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key!=key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString },
          ...prevTodos
        ]
      });
    }
    else {
      Alert.alert('Oops!','You need more characters', [
        { text: 'Understood' , onPress: () => console.log('alert closed')}
      ]);
    }
   
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("dismissed keyboard")
    }}>
    <View style={styles.container}>
          {/* {header} */}
          <Header/>
          <View style={styles.content}>
            {/* {todo form} */}
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                keyExtractor={item => item.key}
              renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={ pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
});
