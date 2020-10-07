import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import Card from '../../ui/Card';

const ItemList = ({photos, nextPage, increment, nav}) => {
  const handleEndReach = async () => {
    await increment();
    await nextPage();
  };

  return (
    <FlatList
      style={{width: Dimensions.get('window').width}}
      data={photos}
      keyExtractor={(item) => item.id}
      renderItem={({item}, idx) => {
        return (
          <Card
            key={idx}
            source={item.urls.full}
            thumb={item.urls.small}
            author={item.user.username}
            desc={item.description ? item.description : item.alt_description}
            nav={nav}
          />
        );
      }}
      onEndReached={() => handleEndReach()}
      onEndReachedThreshold={0.3}
    />
  );
};

export default ItemList;
