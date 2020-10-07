import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  getPhotosAction,
  getNextPageAction,
  incrementPage,
} from '../redux/actions/photoAction';
import ItemList from '../components/core/ItemList';

const HomeScreen = ({
  getPhotos,
  loading,
  photos,
  nextPage,
  increment,
  navigation,
}) => {
  React.useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return loading ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>LOADING...</Text>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ItemList
        photos={photos}
        nextPage={nextPage}
        increment={increment}
        nav={navigation}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos.data,
    loading: state.photos.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getPhotos: getPhotosAction,
      nextPage: getNextPageAction,
      increment: incrementPage,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
