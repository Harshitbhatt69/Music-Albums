//import library to create component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header';

//create component
// eslint-disable-next-line no-undef
const App = () => (
  <View style={{flex:1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
//render it to the device
AppRegistry.registerComponent('albums', () => App);
