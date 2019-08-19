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

import Row from "../Examples/Row";
export default class ContactListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Contact List",
      headerRight: (
        <Button title="Add" onPress={() => navigation.navigate("AddContact")} />
      )
    };
  };
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
          <FlatList
            onSelectContact={() => this.navigation.navigate("ContactDetails")}
            renderItem={obj => <Row {...obj.item} />}
            data={contacts}
          />
        )}
      </View>
    );
  }
}
