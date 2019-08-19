import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

function randomNumber() {
  return Math.floor(Math.random() * 10);
}
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
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Second Screen",
      headerRight: (
        <Button
          title="Press me"
          onPress={() => navigation.navigate("RouteNameThree", { number: 11 })}
        />
      )
    };
  };
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
          title="Go to Screen Three"
          onPress={() =>
            this.props.navigation.navigate("RouteNameThree", {
              number: randomNumber()
            })
          }
        />
      </View>
    );
  }
}
class ScreenComponentThree extends React.Component {
  static navigatorOptions = ({ navigation }) => {
    return {
      headerTitle: `Number: ${navigation.getParam("number")}`
    };
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "green",
          borderWidth: 40
        }}
      >
        <Text style={{ fontSize: 25 }}>
          {this.props.navigation.getParam("number")}
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("RouteNameOne")}
          title="Go to Screen one"
        />
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  RouteNameOne: ScreenComponentOne,
  RouteNameTwo: ScreenComponentTwo,
  RouteNameThree: ScreenComponentThree
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
