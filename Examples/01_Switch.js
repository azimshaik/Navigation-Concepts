import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

class ScreenComponentOne extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "yellow",
          borderWidth: 40
        }}
      >
        <Button
          onPress={() => this.props.navigation.navigate("RouteNameTwo")}
          title="Go to Screen two"
        />
      </View>
    );
  }
}
class ScreenComponentTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "orange",
          borderWidth: 40
        }}
      >
        <Button
          onPress={() => this.props.navigation.navigate("RouteNameOne")}
          title="Go to Screen one"
        />
      </View>
    );
  }
}
const AppNavigator = createSwitchNavigator({
  RouteNameOne: ScreenComponentOne,
  RouteNameTwo: ScreenComponentTwo
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
