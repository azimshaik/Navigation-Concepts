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
      headerTitle: "Add Contact",
      headerRight: (
        <Button
          title="Press me"
          onPress={() => navigation.navigate("RouteNameThree", { number: 11 })}
        />
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
      <View style={{ backgroundColor: "yellow" }}>
        <Button title="Add Contacts screen" />

        {this.state.showContacts && (
          <FlatList renderItem={obj => <Row {...obj.item} />} data={contacts} />
        )}
      </View>
    );
  }
}
