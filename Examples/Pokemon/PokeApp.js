import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PokeList from "./PokeList/index";
import Pokemon from "./Pokemon/index";
import Home from "./Home";

const RootStack = createStackNavigator(
  {
    //Define your screens.
    Home: { screen: Home },
    PokeList: { screen: PokeList },
    Pokemon: { screen: Pokemon }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);
const PokeApp = () => {
  return <AppContainer />;
};
// const PokeApp = () => {
//   return (
//     <ScrollView style={StyleSheet.contianer}>
//       <Text style={StyleSheet.pokeListHeader}>Pokemon API</Text>
//     </ScrollView>
//   );
// };

export default PokeApp;
// class PokeApp extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> textInComponent </Text>
//             </View>
//         )
//     }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  pokeListHeader: {
    fontSize: 20,
    color: "#fff"
  }
});
