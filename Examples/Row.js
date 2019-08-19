import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
const Row = props => (
  <TouchableOpacity style={styles.row}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    padding: 20
  }
});
export default Row;
