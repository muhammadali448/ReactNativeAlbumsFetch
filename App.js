import React from 'react';
import { AppRegistry, View } from 'react-native';
import HeaderTour from './src/components/header';
import AlbumList from './src/components/albumList';


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderTour headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}


AppRegistry.registerComponent('touristfirebaseapp', () => App);

