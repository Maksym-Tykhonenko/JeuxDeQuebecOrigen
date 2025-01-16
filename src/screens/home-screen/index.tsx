/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FRUITS, IMAGES} from '../../constants/images';
import {ACTIVITIES, Activity} from '../../data/activities-list';
import {FONTS} from '../../constants/fonts';
import {styles} from './styles';
import {LogoHeader} from '../../components/headers/logo-header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';
import {BonusModal} from '../../components/bonus-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Fruit, fruits} from '../../data/fruits';
import {Button} from '../../components/button';

export const HomeScreen = () => {
  const {navigate} = useAppNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [randomFruit, setRandomFruit] = useState<Fruit | null>(null);

  useEffect(() => {
    const checkAndShowFruit = async () => {
      const lastShown = await AsyncStorage.getItem('lastFruitShownDate');
      const today = new Date().toDateString();

      if (lastShown === today) {
        return;
      }

      const fruit = fruits[Math.floor(Math.random() * fruits.length)];
      setRandomFruit(fruit);

      await AsyncStorage.setItem('lastFruitShownDate', today);

      const unlockedString = await AsyncStorage.getItem('unlockedFruits');
      const unlocked = unlockedString ? JSON.parse(unlockedString) : [];
      const updatedUnlocked = [...unlocked, fruit.key];
      await AsyncStorage.setItem(
        'unlockedFruits',
        JSON.stringify(updatedUnlocked),
      );

      setModalVisible(true);
    };

    checkAndShowFruit();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({item}: {item: Activity}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigate(Screens.Activities, {
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
        <LogoHeader />
        <ImageBackground
          source={IMAGES.background}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 15,
            height: 80,
            gap: 20,
          }}>
          <Button
            onPress={() => navigate(Screens.Gallery)}
            title="Open Gallery"
            border={true}
          />
          <Button
            onPress={() => navigate(Screens.Rating)}
            title="View Rating"
            border={true}
          />
        </ImageBackground>
        <View style={styles.rowContainer}>
          <Text style={{fontSize: 17, fontFamily: FONTS.PoppinsMedium}}>
            What You Can Do
          </Text>
          <View style={styles.borderContainer}>
            <Text>Play with us</Text>
          </View>
        </View>

        <FlatList
          data={ACTIVITIES}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.rowContainer}>
          <Text style={{fontSize: 17, fontFamily: FONTS.PoppinsMedium}}>
            Collect cards
          </Text>
          <View style={styles.borderContainer}>
            <Text>Replenish your collection</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigate(Screens.CreateEvent)}>
          <Image source={IMAGES.card_1} style={styles.image} />
        </TouchableOpacity>
      </ScrollView>
      {randomFruit && (
        <BonusModal
          visible={modalVisible}
          onClose={closeModal}
          source={FRUITS[`${randomFruit.key}_active`]}
        />
      )}
    </SafeAreaView>
  );
};
