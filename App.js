import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//swtich navigator
// import Example from "./Examples/01_Switch";
// export default Example;

//Stack navigator
// import Example from "./Examples/02_Stack";
// export default Example;

// import ContactsApp from "./Examples/ContactApp";
// export default ContactsApp;

// import PokeList from "./Examples/Pokemon/PokeList/index";
// export default PokeList;

import PokeApp from "./Examples/Pokemon/PokeApp";
export default PokeApp;

// import { createStackNavigator, createAppContainer } from "react-navigation";
// import Testscreen from "./screens/Testscreen";
// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //     </View>
// //   );
// // }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate("Details")}
//         />
//       </View>
//     );
//   }
// }
// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   //route connfiguration objects, screen component is required
//   Home: {
//     screen: HomeScreen
//   },
//   Details: {
//     screen: DetailsScreen
//   }
// });
// export default createAppContainer(AppNavigator);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
