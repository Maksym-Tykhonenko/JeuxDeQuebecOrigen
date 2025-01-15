/* eslint-disable react-native/no-inline-styles */
import {Image, Linking, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PrimaryHeader} from '../../components/headers/primary-header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {FONTS} from '../../constants/fonts';
import {useAppRoute} from '../../hooks/useAppRoute';
import {Screens} from '../../navigation/screens';
import {ToggleOption} from '../../components/toggle-opinion';
import {styles} from './styles';
import {BonusModal} from '../../components/bonus-modal';
import {CoinImg} from '../../components/coin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useBonusStore} from '../../store/useBonusStore';
import MapView, {Callout, Marker} from 'react-native-maps';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../../data/location';

export const EventDetailScreen = () => {
  const {goBack} = useAppNavigation();
  const {params} = useAppRoute<Screens.EventDetail>();
  const [isModalVisible, setModalVisible] = useState(false);
  const incrementBonus = useBonusStore(state => state.incrementBonus);

  const {
    id,
    title,
    image,
    date,
    time,
    location,
    description,
    activities,
    url,
    latitude,
    longitude,
  } = params.data;

  const COORDINATES = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  useEffect(() => {
    const checkModalDisplay = async () => {
      try {
        const shownEvents = await AsyncStorage.getItem('shownEvents');
        const parsedShownEvents = shownEvents ? JSON.parse(shownEvents) : [];

        if (!parsedShownEvents.includes(id)) {
          setTimeout(() => {
            setModalVisible(true);
            incrementBonus(100);
          }, 300);

          parsedShownEvents.push(id);
          await AsyncStorage.setItem(
            'shownEvents',
            JSON.stringify(parsedShownEvents),
          );
        }
      } catch (error) {
        console.error('Error checking or saving event ID:', error);
      }
    };

    checkModalDisplay();
  }, [id, incrementBonus]);

  const onMarkerPress = useCallback(() => {
    Linking.openURL(url);
  }, [url]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <PrimaryHeader title="Event Detail" onPress={goBack} />
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.image} />
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>Date: </Text>
            <Text style={{fontFamily: FONTS.Lato}}>{date}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>Time: </Text>
            <Text style={{fontFamily: FONTS.Lato}}>{time}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>Location: </Text>
            <Text style={{fontFamily: FONTS.Lato}}>{location}</Text>
          </View>
          <View>
            <Text style={styles.text}>Description: </Text>
            <Text style={{fontFamily: FONTS.Lato}}>{description}</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.text}>Activities: </Text>
            {activities.map((text, index) => (
              <View key={index} style={{flexDirection: 'row'}}>
                <Text style={{fontFamily: FONTS.Lato}}>
                  {'    '}●{'    '}
                </Text>
                <Text style={{fontFamily: FONTS.Lato, flexShrink: 1}}>
                  {text}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <ToggleOption />
        <MapView initialRegion={COORDINATES} style={styles.map}>
          <Callout onPress={onMarkerPress}>
            <Marker coordinate={COORDINATES} />
          </Callout>
        </MapView>
      </ScrollView>
      <BonusModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        source={<CoinImg />}
        isCoin={true}
      />
    </SafeAreaView>
  );
};
