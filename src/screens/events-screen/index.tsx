/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PrimaryHeader} from '../../components/headers/primary-header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Event, EVENTS} from '../../data/events-list';
import {styles} from './styles';
import {Screens} from '../../navigation/screens';

export const EventsScreen = () => {
  const {goBack, navigate} = useAppNavigation();

  const renderItem = ({item}: {item: Event}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigate(Screens.EventDetail, {
          data: item,
        })
      }>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <PrimaryHeader title="Events" onPress={goBack} />
        <FlatList
          data={EVENTS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
