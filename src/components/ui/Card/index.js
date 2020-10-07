import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';

const Card = ({source, thumb, author, desc, nav}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Pressable onPress={() => nav.navigate('Detail', {image: source})}>
        <ImageBackground
          source={{uri: thumb}}
          style={{width: width - 30, height: height / 4}}
          imageStyle={styles.image}>
          <View style={styles.description}>
            <Text>{desc}</Text>
            <Text>by {author}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 15,
    marginLeft: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
  },
  description: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    opacity: 0.7,
    padding: 10,
  },
});

export default Card;
