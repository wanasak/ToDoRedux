/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";

import Input from "./components/Input";
import List from "./components/List";
import Title from "./components/Title";
import { actionCreators } from "./components/ToDoListRedux";

const mapStateToProps = state => ({
  todos: state.todos
});

class App extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;

    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { dispatch } = this.props;

    dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.props;

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

export default connect(mapStateToProps)(App);
