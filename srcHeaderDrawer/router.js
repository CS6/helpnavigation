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
  Button,
} from 'react-native';
// import DetailsScreen from './DetailsScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlaceGoToTab from '../components/PlaceGoToTab'
import PlaceGoHome from '../components/PlaceGoHome'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');

type Props = {};
class NavigationDrawerStructure extends Component {
  //https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          {/* <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          /> */}
           <FontAwesome5
            name={"bars"} style={{fontSize:25, width: 25, height: 25, marginLeft: 25 }}
            />
        </TouchableOpacity>
      </View>
    );
  }
}

class DrawerScreen extends Component<Props> {
  // export default class DrawerScreen extends Component<Props> {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'Drawer',
    // headerTitle: 'AAA我是不該出現的 headerDrawerScreenTitleAAA',

    // drawerLabel: 'Home',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };
  constructor() {
    super();
    this.state = {
      value: null,
    };
    this.termId = 100;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DrawerScreen Screen</Text>
        {/* <Button
          title="Go to Home"
          onPress={() => this.props.navigation.push('Home')}/> */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
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
        <PlaceGoToTab/>
        <PlaceGoHome/>
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
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'A!',
      headerTitle: '我是不該出現的 headerTitle',
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
    Home: {
      screen: HomeStack,
    },
    Drawer: {
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
    overlayColor: '#6ba2ae',
    // drawerType: 'slide',
    drawerType: 'front',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6ba2ae',
    },
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'address-card';
        } else if (routeName === 'BottomTab') {
          iconName = 'calendar-check';
        } else if (routeName === 'index') {
          iconName = 'home';
        } else if (routeName === 'DetailsScreen') {
          iconName = 'hiking';
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        return (
          <FontAwesome5
            name={iconName}
            brand
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
          // <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
        );
      },
    }),
    navigationOptions: ({ navigation })=>( {
      tabBarLabel: 'A!',
      headerTitle: '我是該出現的 headerTitle ',
      Title: '我是該出現的 headerTitle 2',
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#f2E"
        />
      ),
      // headerLeft: () => <MenuButton />,
      // headerLeft: () => (
      // //   <TouchableOpacity onPress={this.openDrawer()}>
      // //   <Text>Open Drawer</Text>
      // // </TouchableOpacity>
      //   // <TouchableOpacity onPress={() => { dangerouslyGetParent()  ? navigate('DrawerOpen') : navigate('DrawerClose') }}>
      //   //   {/* <Image source={require('png')} /> */}
      //   //   <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>

      //   // </TouchableOpacity>
      //   <Button title={""+this.index} onPress={() => {}} />
      // ),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      // header: null,
    }),
  },
);
//https://stackoverflow.com/questions/50306084/how-to-get-drawer-over-the-header-in-react-navigation

const indexStack = createStackNavigator(
  {
    index: {
      screen: DrawerNavigator,
      // navigationOptions: {
      //   tabBarLabel: 'A!',
      //   headerTitle: '我是不該出現的 headerTitle',
      //   // header: null,
      // },
      //   defaultNavigationOptions: {
      //   title: '我是A Title',
      // },
    },
    Home: {
      screen: HomeScreen,
    },
  },
  {
    headerMode: 'float', // set this header mode to float so you can share the header
    initialRouteName: 'index',
  },
);

export default createAppContainer(indexStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCF1DB',
    padding: 50,
  },
  TextBox: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C5BBB9',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F4DA17',
    padding: 10,
    borderRadius: 25,
    margin: 50,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
});
