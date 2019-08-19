import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ScrollView
} from "react-native";
import contacts from "../Data/contacts";
import ContactListScreen from "../screens/ContactListScreen";
import AddContactScreen from "../screens/AddContactScreen";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import Row from "./Row";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen
  },
  {
    initialRouteName: "ContactList"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

class ContactApp extends Component {
  state = {
    showContacts: false
  };
  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  render() {
    //console.log(contacts);

    return (
      <View>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <FlatList renderItem={obj => <Row {...obj.item} />} data={contacts} />
        )}
      </View>
    );
  }
}
