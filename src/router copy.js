
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
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');

type Props = {};
class BottomTabScreen extends Component<Props> {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'BottomTabScreen',
  };
  constructor() {
    super();
    this.state = {
      value: null,
    }
    this.termId = 100;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>BottomTab Screen</Text>
        <Button
          title="Go to Home"
          // onPress={() => this.props.navigation.push('Home')}
          onPress={() => this.props.navigation.popToTop()} />
        <TouchableOpacity onPress={() => { this.props.navigation.push('Sets') }}>
          {/* ///7秒后进入底部导航主页 */}
          <View style={styles.button}>
            <Text style={styles.searchContent}>Login</Text>
          </View>
        </TouchableOpacity>


      </View>
    );
  }
}
class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   // headerTitle instead of title
  //   headerTitle:" <Top />",
  //   title: 'BottomTabScreen',
  // };
  static navigationOptions = {
    tabBarLabel: 'Home!',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'BottomTabScreen',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,

// },

//   headerTintColor: '#707070',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },

// },
// );

// export default createAppContainer(TabNavigator);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Settings: { screen: SettingsScreen },
      index: {
        screen: HomeScreen,
        navigationOptions: {
          // header: null,
          tabBarLabel: 'Screen A',
        },
      },
      BottomTabScreen: {
        screen: BottomTabScreen,
        navigationOptions: {
          // header: null,
        },
      },


    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        // tabBarIcon: ({ focused, tintColor }) =>
        //   getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#6787A0',
        inactiveTintColor: '#7C7C7C',
        style: {
          // marginTop:30,
          // height:50,
          // marginBottom:10,
          backgroundColor: '#EFEFEF',
        },
        // activeTintColor: 'tomato',
        // inactiveTintColor: 'gray',
      },
      navigationOptions: {
        // headerTitle instead of title
        headerTitle: '奶油行 dev',
        title: '奶油行 dev',
        headerStyle: {
          backgroundColor: '#F4DA17',
        },
      },
    }
  )
);


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