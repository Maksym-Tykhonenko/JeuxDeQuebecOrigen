/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoHeader} from '../../components/headers/logo-header';
import {User, USERS} from '../../data/rating-list';
import {Bonus} from '../../assets/svg/bonus';
import {styles} from './styles';

export const RatingScreen = () => {
  const renderItem = ({item, index}: {item: User; index: number}) => (
    <View style={styles.renderItem}>
      <View style={[styles.rowContainer, {gap: 12}]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'space-between', height: 98}}>
            <Text style={styles.name}>{item.name + ' ' + item.lastName}</Text>
            <Text style={styles.nickname}>Nickname: {item.nickname}</Text>
            <View
              style={[styles.borderContainer, styles.rowContainer, {gap: 4}]}>
              <Text style={styles.coins}>{item.bonuses.toString()}</Text>
              <Bonus />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.name}>{index + 1}</Text>
            <Text>Ranking</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <LogoHeader />
        <Text style={styles.title}>Rating</Text>
        <FlatList
          data={USERS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
