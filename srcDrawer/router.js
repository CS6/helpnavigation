
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
import DetailsScreen from './DetailsScreen';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');

type Props = {};

class DrawerScreen extends Component<Props> {

// export default class DrawerScreen extends Component<Props> {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'Drawer',
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
        <Text>DrawerScreen Screen</Text>
        {/* <Button
          title="Go to Home"
          onPress={() => this.props.navigation.push('Home')}/> */}
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('DetailsScreen') }}>
          {/* ///7秒后进入底部导航主页 */}
          <View style={styles.button}>
            <Text style={styles.searchContent}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
// const AppContainer = createDrawerNavigator(RootStack, DrawerNavigatorConfig);
// const AppContainer = createDrawerNavigator(RootStack);

// export default App = createAppContainer(RootStack );

// export default class Drawer extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
      </View>
    );
  }
}
const indexStack = createStackNavigator({
  index: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'A!',
      headerTitle: '我是A Screen',
      // header: null,
    },
    defaultNavigationOptions: {
      title: '我是A Title',
    },
  },
});



const DrawerNavigator = createDrawerNavigator(
  {
    // Home: HomeScreen,
    // Settings: SettingsScreen,
    // Home:  DrawerScreen,
    index: { screen: indexStack },

    Home: {
      screen: DrawerScreen,
      navigationOptions: {
        // header: null,
      },
    },
    DetailsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        // header: null,
      },
    },
  },
  {
    // hideStatusBar: true,
    // hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    drawerType:'slide',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },

  },
);

export default createAppContainer(DrawerNavigator);


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