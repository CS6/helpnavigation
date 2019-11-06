/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Button,
  StatusBar,
  Image,
  Alert,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Router from "./srcHeaderDrawer/router";

// import MAP from './src/index'
// import Router from './src/router'
import Loding from './Loading/Login';
// import Login from './src/Login'
// import Sets from './src/Set'
// import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, withNavigation } from 'react-navigation';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import BottomTabScreen from "./src/router";
import Drawer from "./srcDrawer/router";
import IndexScreen from "./srcHeaderDrawer/indexScreen";
// import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator, withNavigation } from 'react-navigation';
// import {createAppContainer, createStackNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// const icon = <FontAwesome5 name={'comments'} />;
// const icon = <FontAwesome5 name={'comments'} solid />;
// const icon = <FontAwesome5 name={'git'} brand />;

// import MapView, { Marker } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { width, height } = Dimensions.get('window');
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'DetailsScreen',
    /* No more header config here! */
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <FontAwesome5 name={'comments'} />
        <Button
          title="Go to BottomTabScreen"
          onPress={() => this.props.navigation.navigate('BottomTabScreen')}
        // onPress={() => this.props.navigation.push('BottomTabScreen')}
        />
        <Button
          title="Go to DrawerScreen"
          // onPress={() => this.props.navigation.push('DrawerScreen')}

          onPress={() => this.props.navigation.navigate('DrawerScreen')}
        />

        <Button
          title="Go to Header Screen"
          // onPress={() => this.props.navigation.push('DrawerScreen')}

          onPress={() => this.props.navigation.navigate('IndexScreen')}
        />
           <Button
          title="Go to Header RouterScreen "
          // onPress={() => this.props.navigation.push('DrawerScreen')}

          onPress={() => this.props.navigation.navigate('RouterScreen')}
        />
        {/* <FontAwesome5 name="battery-full" size={30} color="#6787A0" /> */}
        
      </View>
    );
  }
}
// class BottomTabScreen extends React.Component {
//   static navigationOptions = {
//     title: 'DetailsScreen2',
//     /* No more header config here! */
//   };
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>BottomTab Screen</Text>
//         <Button
//           title="Go to Home"
//           // onPress={() => this.props.navigation.push('Home')}
//           onPress={() => this.props.navigation.popToTop()}

//         />
//         {/* <FontAwesome5 name="battery-full" size={30} color="#6787A0" /> */}

//       </View>
//     );
//   }
// }
// class DrawerScreen extends React.Component {
//   static navigationOptions = {
//     title: 'DetailsScreen2',
//     /* No more header config here! */
//   };
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Drawer Screen</Text>
//         <Button
//           title="Go to Home"
//           // onPress={() => this.props.navigation.push('Home')}
//           onPress={() => this.props.navigation.popToTop()}

//         />
//         {/* <FontAwesome5 name="battery-full" size={30} color="#6787A0" /> */}

//       </View>
//     );
//   }
// }
// const App = () => {
//   return (
//   //   <MapView
//   //   initialRegion={{
//   //     latitude: 37.78825,
//   //     longitude: -122.4324,
//   //     latitudeDelta: 0.0922,
//   //     longitudeDelta: 0.0421,
//   //   }}
//   // />
//     <Fragment>
//        <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('DetailsScreen')}
//         />
//       <MAP/>
//     </Fragment>
//   );
// };

const AppSwitchNavigator = createSwitchNavigator({
  Home: {
    screen: DetailsScreen,

    // navigationOptions: {
    //   navigationOptions: () => {
    //     return {
    //       headerTitle: 'Tenant'
    //     };
    //   }
    //   // header: null,
    // },
  },
  BottomTabScreen: {
    screen: BottomTabScreen,
    navigationOptions: {
      // header: null,
      tabBarLabel: 'Screen A',
    },
  },
  DrawerScreen: {
    screen: Drawer,
    navigationOptions: {
      // header: null,
      headerTitle: '我是DrawerScreen',
    },
  },
  RouterScreen: {
    screen: Router,
    navigationOptions: {
      // header: null,
      headerTitle: '我是有Header的DrawerScreenTitle',
    },
  },
  
  IndexScreen: {
    screen: createStackNavigator({
      index: {
        screen: IndexScreen,
        // navigationOptions: {
        //   tabBarLabel: 'A!',
        //   headerTitle: '我是有Header的DrawerScreen',
        //   // header: null,
        //這段移到到元件內才可以減少自訂Header的麻煩
        // },
    
        defaultNavigationOptions: {
          title: '我是有Header的DrawerScreenTitle',
          // header: null,
        },
      },
    }),
  },
});

// const RootStack = createStackNavigator({
//   Home: {
//     screen: DetailsScreen,

//     navigationOptions: {
//       // header: null,
//     },
//   },
//   BottomTabScreen: {
//     screen: BottomTabScreen,
//     navigationOptions: {
//       // header: null,
//       tabBarLabel: 'Screen A',
//     },
//   },
//   DrawerScreen: {
//     screen: Drawer,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   Loding: {
//     screen: Loding,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   Login: {
//     screen: Loding,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   Sets: {
//     screen: Loding,
//     navigationOptions: {
//       //  header:null,
//     },
//   },
//   //   Home: {
//   //     screen: Router,
//   //     navigationOptions:{
//   //       header:null,
//   //   }
//   // },
//   // MAP: {
//   //   screen: MAP
//   // },
//   // Signup: {
//   //   screen: DetailsScreen
//   // }
// });
// const RootStack = createStackNavigator(
//   {
//     // Login: { screen: Login_index },

//     // Home: { screen: HomeScreen },
//     MAP :{screen:MAP},
//     // QRvue: { screen: QRvue },
//     // Setup: { screen: Setup },

//     Details: { screen: DetailsScreen },
//     // Phone: {
//     //   screen: TokenScreen,
//     //   path: 'token/:token_code',
//     // },
//     Phone: {
//       screen: DetailsScreen,
//       path: 'token/:token_code',
//     },

//   },
//   {
//     // initialRouteName: 'Login',
//      initialRouteName: 'MAP',

//   }
// );

const prefix = 'bike://';
// const App = createAppContainer(RootStack);
// export default App ;

// const AppContainer = createAppContainer(RootStack);


const AppContainer = createAppContainer(AppSwitchNavigator);

// const App = createAppContainer(RootStack);

// export default App = createAppContainer(RootStack );

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
// export default App = () => <RootStack uriPrefix={prefix} />;
// export default App;
// export default DetailsScreen;



const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

