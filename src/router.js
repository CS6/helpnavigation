
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
import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlaceGoToDrawer from '../components/PlaceGoToDrawer'
import PlaceGoHome from '../components/PlaceGoHome'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');
const Placeholder = ({ text }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{text}</Text>
  </View>
);

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
        <PlaceGoToDrawer/>
        <PlaceGoHome/>
      </View>
    );
  }
}

class A extends React.Component {
  render() {
    return <Placeholder text="A!" />;
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


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // navigationOptions: () => {
      //   return {
      //     headerTitle: 'Tenant'
      //   };
      // }
      tabBarLabel: 'Home!',
      headerTitle: '我是首頁ＹＡ',
      // header: null,
    },
    defaultNavigationOptions: {
      title: 'Welcome',
    },
  },
});
const BottomTabStack = createStackNavigator({
  BottomTab: {
    screen: BottomTabScreen,
    navigationOptions: {
      tabBarLabel: 'Home!',
      headerTitle: '我是BottomTabScreenＹＡ',
      // header: null,
    },
    defaultNavigationOptions: {
      title: '我是BottomTabScreen Title',
    },
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings!',
      headerTitle: '我是SettingsScreen',
      // header: null,

    },
    defaultNavigationOptions: {
      title: '我是SettingsScreen Title',
    },
  },
});

const indexStack = createStackNavigator({
  index: {
    screen: A,
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

export default createAppContainer(createBottomTabNavigator({
  Home: { screen: HomeStack },
  BottomTab: { screen: BottomTabScreen },
  Settings: { screen: SettingsStack },
  // index:{screen: indexStack},
  index: {
    screen: () => indexStack, // Empty screen
    navigationOptions: () => ({
      tabBarLabel: 'A!',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require('./img/B3.png') : require('./img/C3.png')}
          style={{ resizeMode: "contain", width: 50, marginBottom: 10, }}
        />
      )
    })
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = "address-card";
      } else if (routeName === 'BottomTab') {
        iconName = "calendar-check";

      } else if (routeName === 'Settings') {
        iconName = "home";
      } else if (routeName === 'DocList') {
        iconName = "hiking";
      }
      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      // return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      return (
        <FontAwesome5 name={iconName} brand size={horizontal ? 20 : 25} color={tintColor} />
        // <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />

      );
    },
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
));



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