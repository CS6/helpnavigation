
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');

type Props = {};
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'DetailsScreen',
    /* No more header config here! */
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {/* <Button
          title="Go to BottomTabScreen"
          onPress={() => this.props.navigation.push('BottomTabScreen')}
        />
        <Button
          title="Go to DrawerScreen"
          onPress={() => this.props.navigation.push('DrawerScreen')}
        /> */}
        {/* <FontAwesome5 name="battery-full" size={30} color="#6787A0" /> */}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCF1DB',
    padding: 50
  },
  TextBox: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C5BBB9'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F4DA17',
    padding: 10,
    borderRadius: 25,
    margin: 50
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  }
})