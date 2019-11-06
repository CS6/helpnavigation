import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class PlaceGoHome extends React.Component {
  render() {
    return (
      <Button
        title="PlaceGoHome"
        onPress={() => {
        //   this.props.navigation.goBack();
          this.props.navigation.navigate('BottomTabScreen');
        }}
      />
    );
  }
}
// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(PlaceGoHome);