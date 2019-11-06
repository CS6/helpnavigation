import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class PlaceGoToDrawer extends React.Component {
  render() {
    return (
      <Button
        title="PlaceGoToDrawer"
        onPress={() => {
        //   this.props.navigation.goBack();
          this.props.navigation.navigate('RouterScreen');
        }}
      />
    );
  }
}
// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(PlaceGoToDrawer);