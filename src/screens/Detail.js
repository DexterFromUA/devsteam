import React from 'react';
import {View, Image, Dimensions} from 'react-native';

const DetailScreen = ({route}) => {
  const {width, height} = Dimensions.get('window');
  const {image} = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={{uri: image}}
        style={{flex: 1, width: width, height: height, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default DetailScreen;
