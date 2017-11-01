/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { actionCreators } from "./components/ToDoListRedux";
import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import React, { Component } from "react";
import { Platform, ScrollView } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {};

  componentWillMount() {
    const { store } = this.props;

    const { todos } = store.getState();
    this.setState({ todos });

    this.unsubscribe = store.subscribe(() => {
      const { todos } = store.getState();
      this.setState({ todos });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddTodo = text => {
    const { store } = this.props;

    store.dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { store } = this.props;

    store.dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.state;

    return (
      <ScrollView>
        <Title>Todo List</Title>
        <Input
          placeholder={"Type a todo, then hit enter."}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onPressItem={this.onRemoveTodo} />
      </ScrollView>
    );
  }
}
