


[loading]=>{[甲],[乙]}:createSwitchNavigator
[甲]{[A]}:createDrawerNavigator
[乙]{[A],[B],[C],[D]}:createBottomTabNavigator
[A]:{1>2>3>4}:createStackNavigator
[B]:{[R],[L]}:react-native-scrollable-tab-view
[C]:{R[R1>2>3>4],L[L>1>2>3>4]}:RN-scrollable-tab-view + createStackNavigator
[D]:


withNavigation( [A3] )
        Navigator.push("A3", {})

import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
